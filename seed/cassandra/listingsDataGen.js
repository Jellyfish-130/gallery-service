const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cassandraSeed = require('./cassandraSeed.js');

const listingsDataGen = (start, end) => {

  const listings = [];
  for (let i = start; i <= end; i++) {

    const title = faker.company.bsAdjective() + ' ' + faker.company.bsNoun();
    const name = faker.company.bsBuzz();
    const rating = faker.random.number({ min: 4, max: 5, precision: 0.5 });
    const reviews = faker.random.number({ min: 50, max: 2020 });
    const isSuperHost = faker.random.boolean();
    const location = faker.address.city() + ', ' + faker.address.stateAbbr();
    const host = faker.name.firstName() + ' ' + faker.name.lastName();
    const avatar = faker.image.avatar();
    const isShare = faker.random.boolean();
    const isSave = faker.random.boolean();

    const listingEntry = {
      listing_id: i,
      listing_title: title,
      listing_name: name,
      listing_rating: rating,
      num_reviews: reviews,
      superhost: isSuperHost,
      listing_location: location,
      hostname: host,
      host_avatar_url: avatar,
      share: isShare,
      save_feature: isSave,
    };
    listings.push(listingEntry);

    if (i === (end / 4)) {
      console.log(i);
    } else if (i === (end / 2)) {
      console.log(i);
    } else if (i === end) {
      console.log('Records Created: ', i)
    }
  };
  return listings;
};

const csvWriter = createCsvWriter({
  path: "./csv/listings.csv",
  header: [
    { id: "listing_id", title: "listing_id" },
    { id: "listing_title", title: "listing_title" },
    { id: "listing_name", title: "listing_name" },
    { id: "listing_rating", title: "listing_rating" },
    { id: "num_reviews", title: "num_reviews" },
    { id: "superhost", title: "superhost" },
    { id: "listing_location", title: "listing_location" },
    { id: "hostname", title: "hostname" },
    { id: "host_avatar_url", title: "host_avatar_url" },
    { id: "share", title: "share" },
    { id: "save_feature", title: "save_feature" },
  ],
});

const listingsData = listingsDataGen(cassandraSeed.listingStart, cassandraSeed.listingEnd);

csvWriter.writeRecords(listingsData)
  .then(() => {
    console.log("path: ./seed/cassandra/csv/listings.csv");
    console.log("listingsDataGen.js Almost Complete!");
    console.log("listingsDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });
