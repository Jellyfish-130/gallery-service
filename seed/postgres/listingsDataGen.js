const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const recordsFile = require('./records.js');

const listingsDataGen = (records) => {

  const listings = [];
  for (let i = 1; i <= records; i++) {
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

    if (i === 1000) {
      console.log(i);
    } else if (i === 10000) {
      console.log(i);
    } else if (i === records) {
      console.log('Records Created: ', i)
    }
  }
  return listings;
};

const csvWriter = createCsvWriter({
  path: "./sample_csv/listings.csv",
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

const listingsData = listingsDataGen(recordsFile.listingRecords);

csvWriter.writeRecords(listingsData)
  .then(() => {
    console.log("path: ./sample_csv/listings.csv");
    console.log("listingsDataGen.js Almost Complete!");
    console.log("listingsDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });

