const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const postgreSQLSeed = require('./postgreSQLSeed.js');

const listingsDataGen = (start, end) => {

  const listings = [];
  for (let i = start; i <= end; i++) {

    const listingTitle = faker.company.bsAdjective() + ' ' + faker.company.bsNoun();
    const listingName = faker.company.bsBuzz();
    const listingRating = faker.random.number({ min: 4, max: 5, precision: 0.5 });
    const listingReviews = faker.random.number({ min: 50, max: 2020 });
    const isSuperHost = faker.random.boolean();
    const listingLocation = faker.address.city() + ', ' + faker.address.stateAbbr();
    const listingHostName = faker.name.firstName() + ' ' + faker.name.lastName();
    const listing_host_avatar = faker.image.avatar();
    const listingShareFeature = faker.random.boolean();
    const listingSaveFeature = faker.random.boolean();

    const listingEntry = {
      listing_id: i,
      title: listingTitle,
      listing_name: listingName,
      rating: listingRating,
      num_reviews: listingReviews,
      superhost: isSuperHost,
      listing_location: listingLocation,
      hostname: listingHostName,
      host_avatar_url: listing_host_avatar,
      share: listingShareFeature,
      save_feature: listingSaveFeature,
    };
    listings.push(listingEntry);

    if (i === (end / 4)) {
      console.log(i);
    } else if (i === (end / 2)) {
      console.log(i);
    } else if (i === end) {
      console.log('Records Created: ', i)
    }
  }
  return listings;
};

const csvWriter = createCsvWriter({
  path: "./csv/listings.csv",
  header: [
    { id: "listing_id", title: "listing_id" },
    { id: "title", title: "title" },
    { id: "listing_name", title: "listing_name" },
    { id: "rating", title: "rating" },
    { id: "num_reviews", title: "num_reviews" },
    { id: "superhost", title: "superhost" },
    { id: "listing_location", title: "listing_location" },
    { id: "hostname", title: "hostname" },
    { id: "host_avatar_url", title: "host_avatar_url" },
    { id: "share", title: "share" },
    { id: "save_feature", title: "save_feature" },
  ],
});

const listingsData = listingsDataGen(postgreSQLSeed.listingStart, postgreSQLSeed.listingEnd);

csvWriter.writeRecords(listingsData)
  .then(() => {
    console.log("path: ./seed/postgres/csv/listings.csv");
    console.log("listingsDataGen.js Almost Complete!");
    console.log("listingsDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });

