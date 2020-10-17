-- Setting up Postgres Schema of a Gallery Service component for a premium rental web application

DROP DATABASE IF EXISTS jellyfish130;

CREATE DATABASE jellyfish130;

-- Use `jellyfish130` database

\c jellyfish130;

-- Add constraints to each field

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  title varchar(30),
  listing_name varchar(30),
  listing_location varchar(30),
  listing_description text,
  quote text,
  hostname varchar(30),
  rating varchar(5),
  guests integer not null
)

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL PRIMARY KEY,
  rooms ARRAY[8]  <=== Living, Bedroom, bathroom
)

-- Might need another table => /api/listings/rooms/room_id

CREATE TABLE IF NOT EXISTS galleries (
  gallery_id SERIAL PRIMARY KEY,
  featured ARRAY[3],
  listing_id integer references listings(id),
  room_id integer references rooms(room_id)
)