# **Jellyfish-130 - Gallery Module Optimization, System Design**

## **Site Optimization Overview**

- Identified system bottlenecks, modified system configurations, added an NGINX load balancer, cached the data, and horizontally scaled a heavily READ / GET backend with 60 million data records to reduce latency.
  - Resulted in:
    - Increased read throughput by 57%
    - Reduced response times to an avarege of ~83ms for image retrieval operations while maintaining a 0% error rate for 1,750 requests per second, or ~105,000 requests per minute
      - Stress test data in Loader.io: https://bit.ly/2HO2Szs

## **Table of Contents**

- [Client Demo](#demo)
- [Endpoints Documentations](#API-CRUD-Operations)
- [Installing Dependencies](#dependencies)
- [Getting Started](#development)
- [Getting Deployed](#usage)

## **Demo**

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-1.png" width="75%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-2.png" width="75%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/SDC+Img-3.png" width="75%"></p>

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

