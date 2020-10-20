const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const listingsDataGen = (records) => {
  let listings = [];
  for (let i = 0; i < records; i++) {
    let listingTitle = faker.company.bsAdjective() + ' ' + faker.company.bsNoun();
    let listingName = faker.company.bsBuzz();
    let listingRating = faker.random.number({ min: 4, max: 4, precision: 0.5 });
    let listingReviews = faker.random.number({ min: 50, max: 2020 });
    let isSuperHost = faker.random.boolean();
    let listingLocation = faker.address.city() + ', ' + faker.address.stateAbbr();
    let listingHostName = faker.name.firstName() + ' ' + faker.name.lastName();
    let listing_host_avatar = faker.image.avatar();
    let listingShareFeature = faker.random.boolean();
    let listingSaveFeature = faker.random.boolean();

    let listingEntry = {
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
  }
  return listings;
};

const csvWriter = createCsvWriter({
  path: "./sample_csv/listings.csv",
  header: [
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

const listingsData = listingsDataGen(25);

csvWriter.writeRecords(listingsData)
  .then(() => {
    console.log("listingsDataGen Complete");
  })
  .catch((error) => {
    console.log('The error is: ', error);
  });

