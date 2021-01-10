# **Jellyfish-130 - Gallery Module Optimization, System Design**

## **Site Optimization**

- Identified system bottlenecks, modified system configurations, added an NGINX load balancer, cached the data, and horizontally scaled a heavily READ / GET backend to reduce latency.
  - Results:
    - Increased read throughput by 57%
    - Reduced response times to an avarege of ~83ms for image retrieval operations while maintaining 0% error rate for 1,750 requests per second, or ~105,000 requests per minute
      - Data of the stress test in Loader.io: https://bit.ly/2HO2Szs

## **Table of Contents**

- API Endpoints / CRUD Operations
- [Installing Dependencies](#dependencies)
- [Getting Started](#development)
- [Getting Deployed](#usage)

## **API Endpoints / CRUD Operations**

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

```

### Add photo(s) to a `listing`

- Create / Post: `/listings/:listingId/photos/add`
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

- Update / Put: `/listings/:listingId/photos/:photoId/update`
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

- Delete / Delete `/listings/:listingId/photos/:photoId`
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
npm run build-dev
```

To run server

```sh
npm start-dev
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

