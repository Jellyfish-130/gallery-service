DROP KEYSPACE IF EXISTS gallery_service;

CREATE KEYSPACE gallery_service WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 } AND durable_writes = 'true';

USE gallery_service;

CREATE TABLE listings_by_id (
  listing_id int,
  listing_title text,
  listing_name text,
  listing_rating decimal,
  num_reviews int,
  superhost boolean,
  listing_location text,
  hostname text,
  host_avatar_url text,
  share boolean,
  save_feature boolean,
  PRIMARY KEY(listing_id)
);

CREATE TABLE feature_photos_by_listings_id (
  listing_id int,
  feature_photo_id int,
  photo_1_url text,
  photo_2_url text,
  PRIMARY KEY(listing_id, feature_photo_id)
);

CREATE TABLE photos_by_listing_id (
  listing_id int,
  room_id int,
  photo_id int,
  room_name text,
  photo_url text,
  photo_caption text,
  PRIMARY KEY(listing_id, room_id)
);

COPY listings_by_id (listing_id, listing_title, listing_name, listing_rating, num_reviews, superhost, listing_location, hostname, host_avatar_url, share, save_feature) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/listings.csv' WITH HEADER = TRUE;

COPY feature_photos_by_listings_id (listing_id, feature_photo_id, photo_1_url, photo_2_url) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/feature_photos.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos1.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos2.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos3.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos4.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos5.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos6.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos7.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos8.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos9.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos10.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos11.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos12.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos13.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos14.csv' WITH HEADER = TRUE;

COPY photos_by_listing_id (listing_id, room_id, photo_id, room_name, photo_url, photo_caption) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/HRSF-backend-capstone/gallery-service/seed/cassandra/csv/photos15.csv' WITH HEADER = TRUE;
