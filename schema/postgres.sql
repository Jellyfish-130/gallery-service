-- Setting up Postgres Schema of a Gallery Service component for a premium rental web application

DROP SCHEMA gallery_service CASCADE;

CREATE SCHEMA gallery_service;

-- Use `gallery_service` database

\c gallery_service;

-- Add constraints to each field

-- Create listings table -- ADD to Ratings CHECK (4.0 < rating <= 5.0)

CREATE TABLE gallery_service.listings (
  listing_id SERIAL PRIMARY KEY,
  title varchar(55),
  listing_name varchar(55),
  rating varchar(4),
  num_reviews smallint not null,
  superhost boolean,
  listing_location varchar(55),
  hostname varchar(55),
  host_avatar_url text,
  share boolean,
  save_feature boolean
);

-- Create feature_photos table

CREATE TABLE gallery_service.feature_photos (
  feature_photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  photo_1_url text,
  photo_2_url text
);

-- Create rooms table --> minimum of three rooms per listing

CREATE TABLE gallery_service.rooms (
  room_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  room_name varchar(55)
);

-- Create photos table --> minimum of ten photos per listing

CREATE TABLE gallery_service.photos (
  photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  room_id integer not null references gallery_service.rooms(room_id),
  photo_url text,
  photo_caption varchar(100)
);

COPY gallery_service.listings (listing_id, title, listing_name, rating, num_reviews, superhost, listing_location, hostname, host_avatar_url, share, save_feature) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/postgres/sample_csv/listings.csv' WITH CSV HEADER DELIMITER ',';

COPY gallery_service.feature_photos (feature_photo_id, listing_id, photo_1_url, photo_2_url) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/postgres/sample_csv/feature_photos.csv' WITH CSV HEADER DELIMITER ',';

COPY gallery_service.rooms (room_id, listing_id, room_name) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/postgres/sample_csv/rooms.csv' WITH CSV HEADER DELIMITER ',';

COPY gallery_service.photos (photo_id, listing_id, room_id, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/postgres/sample_csv/photos.csv' WITH CSV HEADER DELIMITER ',';