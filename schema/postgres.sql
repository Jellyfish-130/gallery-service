-- Setting up Postgres Schema of a Gallery Service component for a premium rental web application

DROP DATABASE IF EXISTS gallery_service;

CREATE DATABASE gallery_service;

-- Use `gallery_service` database

\c gallery_service;

-- Add constraints to each field

-- Create listings table -- ADD to Ratings CHECK (4.0 < rating <= 5.0)

CREATE TABLE IF NOT EXISTS gallery_service.listings (
  id SERIAL PRIMARY KEY,
  title varchar(50),
  listing_name varchar(50),
  rating numeric(2,2),
  num_reviews smallint not null,
  superhost boolean,
  listing_location varchar(50),
  hostname varchar(30),
  host_avatar_url TINYTEXT,
  share boolean,
  save_feature boolean
)

-- Create feature_photos table

CREATE TABLE IF NOT EXISTS gallery_service.feature_photos (
  feature_photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(id),
  photo_1_url TINYTEXT,
  photo_2_url TINYTEXT
)

-- Create rooms table --> minimum of three rooms per listing

CREATE TABLE IF NOT EXISTS gallery_service.rooms (
  room_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(id),
  room_name varchar(30)
)

-- Create photos table --> minimum of ten photos per listing

CREATE TABLE IF NOT EXISTS gallery_service.photos (
  photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(id),
  room_id integer not null references gallery_service.rooms(room_id),
  photo_url TINYTEXT,
  photo_caption varchar(50)
)
