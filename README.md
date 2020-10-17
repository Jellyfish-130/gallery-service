# Jelly-Fish

> System Design Capstone Project. This is the back-end capstone design of the gallery service for a premium home rental web application.

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

### Add listings

- POST `/api/listings`

**Success Status Code:** `201`

**Returns:** JSON

```json
{
   "_id": "5f89fac2472c0d4d43c04b91",
    "listingID": 11,
    "title": "Dome in the Desert in Joshua Tree",
    "name": "Dome house",
    "location": "Joshua Tree, California, United States",
    ...
}
```

### Get all listings

- GET `/api/listings`

**Success Status Code:** `200`

**Returns:** JSON

```json
{
  "_id": "5f89fac2472c0d4d43c04b91",
  "listingID": 11,
  "title": "Dome in the Desert in Joshua Tree",
  "name": "Dome house",
  "location": "Joshua Tree, California, United States",
  ...
}
```

### Get listings ID

- GET `/api/listings/:listingId`

**Path Parameters:**

- `listingId` listings id

**Success Status Code:** `200`

**Returns:** JSON

```json
{
  "_id": "5f89fac2472c0d4d43c04b91",
  "listingID": 11,
  "title": "Dome in the Desert in Joshua Tree",
  "name": "Dome house",
  "location": "Joshua Tree, California, United States",
  ...
}
```

### Update listings

- PATCH `/api/listings/:listingId`

**Path Parameters:**

- `listingsId` listings id

**Success Status Code:** `204`

**Returns:** JSON

```json
{
  "success": true,
  "updatedCount": 1
}
```

### Delete all dates -- TBD

- DELETE `/api/listings`

**Success Status Code:** `204`

**Returns:** JSON

```json
{
  "success": true,
  "deletedCount": 100
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
