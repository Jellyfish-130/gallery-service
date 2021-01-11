# **Jellyfish-130 App Optimization System Design**

## **Optimization Overview**

- Identified system bottlenecks, modified system configurations, added an NGINX load balancer, cached the data, and horizontally scaled a heavily READ / GET backend with 60 million data records to reduce latency.
  - Resulted in:
    - Increased read throughput by 57%
    - Reduced response times to an avarege of ~83ms for image retrieval operations while maintaining a 0% error rate for 1,750 requests per second, or ~105,000 requests per minute
      - Stress test data in Loader.io: https://bit.ly/2HO2Szs

## **Table of Contents**

- [Client Demo](#demo)
- [API Endpoints Documentations](#API-CRUD-Operations)
- [Installing Dependencies](#dependencies)
- [Getting Started](#development)
- [Getting Deployed](#usage)
- [Database Schema Design](#PostgreSQL)

## **Demo**

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-1.png" width="75%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-2.png" width="75%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-3.png" width="75%"></p>

## **Technologies / Frameworks Used** ##

- PostgreSQL
- Cassandra
- Express.js
- React
- Node.js
- Styled Components

**Other Tools**: NGINIX, EC2, S3, Loader.io, New Relic, K6

## **API-CRUD-Operations**

## For Guests / Site Visitors:

### Get all `listings` on the platform upon ComponentDidMount()

- READ / GET: `/listings`
- Path Parameter(s): none

```
Request Body:

  None
```

```
Response object:

{
  [
    {
    listingID: number,
    title: string,
    location: string,
    description: string,
    quote: string,
    hostname: string,
    rating: string,
    guests: number,
    bedrooms: number,
    beds: number,
    bathrooms: number,
    superhost: boolean,
    reviews: array,
    gallery: object {
        featured: array [],
        rooms: [
          {
            name: string,
            amenities: array [],
            images: array [
              object {
                url: string,
                comment: string
              }
            ]
          }
        ]
      }
    },
    {
      ... second listing object
    },
    {
      ... third listing object
    },
    {
      ... so on
    },
  ]
}

Sucess Status Code: 201
```

## For Hosts / Listers:

### Add a listing to `listings`

- Create / Post: `/listings/:listingId/add`
- Path Parameters: `:listingId`

```
Request Body:

{
      listingID: number,
      title: string,
      location: string,
      description: string,
      quote: string,
      hostname: string,
      rating: string,
      guests: number,
      bedrooms: number,
      beds: number,
      bathrooms: number,
      superhost: boolean
}
```

```
Response Object:

{
  listingId: number
}

Success Status Code: 201
```

### Add photo(s) to a `listing`

- CREATE / POST: `/listings/:listingId/photos/add`
- Path Parameters: `:listingId`

```
Request Body:

{
  images: array []
}

```

```
Response Object:

  Success Status Code: 200
```

### Get a `listing` on the platform

- READ / GET: `/listings/:listingId`
- Path Parameter(s): none

```
{
  listingID: number,
  title: string,
  location: string,
  description: string,
  quote: string,
  hostname: string,
  rating: string,
  guests: number,
  bedrooms: number,
  beds: number,
  bathrooms: number,
  superhost: boolean,
  reviews: array [],
  gallery: object {
      featured: [],
      rooms: [
        {
          name: string,
          amenities: array [],
          images: array [
            object {
              url: string,
              comment: string
            }
          ]
        }
      ]
    }
}
```

```
Response Object:

  Success Status Code: 200
```

### Update photo(s) to `photos` for a `listing`

- UPDATE / PUT: `/listings/:listingId/photos/:photoId/update`
- Path Parameters: `:listingId, :photoId`

```
Request Body:

{
  url: string
}
```

```
Response Object:

  Success Status Code: 201
```

### Delete a photo from `photos` from a `listing`

- DELETE / DELETE `/listings/:listingId/photos/:photoId`
- Path Parameters `:listingId, :photoId`

```
Request Body:

  None
```

```
Request Object:

  Sucess Status Code: 204
```

## **Dependencies**

From within the root directory:

```sh
npm install
```

## **Requirements**

- Node 10.5.0
- npm 6.14.7
- MongoDB 4.2.8

## **Development**

From within the root directory:

To run dev environment/webpack

```sh
npm run build
```

To run server

```sh
npm start
```

To seed database

```sh
npm run seed
```

To run tests

```sh
npm run test
```

## **Usage**

To get started with the Gallery Module, run http://localhost:3001/ on your local web browser.

## **Database Schema Design**

### **PostgreSQL:**

```sh
CREATE SCHEMA gallery_service;

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

CREATE TABLE gallery_service.feature_photos (
  feature_photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  photo_1_url text,
  photo_2_url text
);

CREATE TABLE gallery_service.rooms (
  room_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  room_name varchar(55)
);

CREATE TABLE gallery_service.photos (
  photo_id SERIAL PRIMARY KEY,
  listing_id integer not null references gallery_service.listings(listing_id),
  room_id integer not null references gallery_service.rooms(room_id),
  photo_url text,
  photo_caption varchar(500)
);
```

### **Cassandra:**

```sh
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
```