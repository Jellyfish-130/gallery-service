DROP KEYSPACE IF EXISTS gallery_service;

CREATE KEYSPACE gallery_service WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 } AND durable_writes = 'true';

USE gallery_service;

CREATE TABLE IF NOT EXISTS listings (
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

CREATE TABLE IF NOT EXISTS feature_photos (
  feature_photo_id uuid,
  listing_id uuid,
  photo_1_url text,
  photo_2_url text,
  PRIMARY KEY(feature_photo_id, listing_id)
)

CREATE TABLE IF NOT EXISTS photos (
  photo_id uuid,
  listing_id uuid,
  room_id uuid,
  room_name text,
  photo_url text,
  photo_caption text,
  PRIMARY KEY(photo_id, (listing_id, room_id))
)