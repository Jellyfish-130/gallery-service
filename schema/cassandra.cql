DROP KEYSPACE IF EXISTS gallery_service;

CREATE KEYSPACE gallery_service WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 } AND durable_writes = 'true';

USE gallery_service;

CREATE TABLE IF NOT EXISTS listings_by_listing_id (
  listing_id uuid,
  title text,
  listing_name text,
  rating int,
  num_reviews int,
  superhost boolean,
  listing_location text,
  hostname text,
  host_avatar_url text,
  share boolean,
  save_feature boolean,
  PRIMARY KEY(listing_id)
)

CREATE TABLE IF NOT EXISTS feature_photos_by_listing_id (
  listing_id uuid,
  feature_photo_id uuid,
  photo_1_url text,
  photo_2_url text,
  PRIMARY KEY(listing_id, feature_photo_id)
)

CREATE TABLE IF NOT EXISTS photos_by_listing_id (
  listing_id uuid,
  room_id uuid,
  photo_id uuid,
  room_name text,
  photo_url text,
  photo_caption text,
  PRIMARY KEY(listing_id, room_id)
)
