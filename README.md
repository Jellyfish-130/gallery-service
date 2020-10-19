# Jelly-Fish

> System Design Capstone Project. This is the back-end capstone design project for the gallery service component of a premium home rental web application.

## Related Projects

- Lim E. Nhep - https://github.com/Jellyfish-130/gallery-service
- Catherine Straus - https://github.com/Jellyfish-130/calendar-service
- Jacob Johnson - https://github.com/Jellyfish-130/review-service
- Arun Kambivalappil - https://github.com/Jellyfish-130/more-places-service

## Table of Contents

1. [API-Endpoints](#API-Endpoints)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)

## API-Endpoints

> See below for the detailed breakdown.

### Add a specific listing to `listings`

- POST `/api/listings/listing_id`

**Path Parameters:**

- `listing_id` listing id

**Success Status Code:** `201`

**Returns:** JSON

```json
{
    ...
}
```

### Get all `listings`

- GET `/api/listings`

**Success Status Code:** `200`

***Example*

`/api/listings/...`

**Returns:** JSON

```json
{
  ...
}
```

### Get a specific listing from `listings`

- GET `/api/listings/:listing_id`

**Path Parameters:**

- `listing_id` listing id

**Success Status Code:** `200`

***Example*

`/api/listings/...`

**Returns:** JSON

```json
{
  ...
}
```

### Update a specific photo in `listings`

- PATCH `/api/listings/:listing_id/photos/:photo_id`

**Path Parameters:**

- `listings_id` listing id
- `photo_id` photo id

**Success Status Code:** `200`

***Example*

`/api/listings/...`

**Request Body:** JSON

```json
{
   ...
}
```

### Delete a specific photo from `listings`

- DELETE `/api/listings/:listing_id/photos/:photo_id`

**Path Parameters:**

-`listing_id` listing id
-`photo_id` photo id

**Success Status Code:** `204`

***Example*

`/api/listings/...`

**Returns:** JSON

```json
{
  "success": true,
  "deletedCount": 1
}
```
## Usage

> Some usage instructions.

To get the Gallery Module, run http://localhost:3001/.

## Requirements

- Node 10.5.0
- npm 6.14.7
- MongoDB 4.2.8

## Development

From within the root directory:

To install dependencies

```sh
npm install
```

To run dev environment/webpack

```sh
npm run build-dev
```

To run server

```sh
npm start-dev
```

To run MongoDB -- TBD

```sh
# mkdir data
# mongod --dbpath data
```

To seed database

```sh
npm run seed
```

To run tests

```sh
npm run test
```

### Installing Dependencies

From within the root directory:

```sh
npm install
```
