const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const postgreSQLSeed = require('./postgreSQLSeed.js');

const featurePhotosDataGen = (start, end, foreignStart, foreignEnd) => {

  const featurePhotos = [];
  for (let i = start; i <= end; i++) {

    const listingId = faker.random.number({ min: foreignStart, max: foreignEnd })
    const path = ['a', 'b', 'c'];
    const featurePhoto_1 = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${faker.random.number({ min: 1, max: 50 }) + path[faker.random.number({ min: 0, max: 2 })]}.jpg`;
    const featurePhoto_2 = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${faker.random.number({ min: 1, max: 50 }) + path[faker.random.number({ min: 0, max: 2 })]}.jpg`;

    const featurePhotosEntry = {
      feature_photo_id: i,
      listing_id: listingId,
      photo_1_url: featurePhoto_1,
      photo_2_url: featurePhoto_2,
    };
    featurePhotos.push(featurePhotosEntry);

    if (i === (end / 4)) {
      console.log(i);
    } else if (i === (end / 2)) {
      console.log(i);
    } else if (i === end) {
      console.log('Records Created: ', i)
    }
  };
  return featurePhotos;
};

const csvWriter = createCsvWriter({
  path: "./csv/feature_photos.csv",
  header: [
    { id: "feature_photo_id", title: "feature_photo_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "photo_1_url", title: "photo_1_url" },
    { id: "photo_2_url", title: "photo_2_url" },
  ],
});

const featurePhotosData = featurePhotosDataGen(postgreSQLSeed.featurePhotoStart, postgreSQLSeed.featurePhotoEnd, postgreSQLSeed.foreignListingStart, postgreSQLSeed.foreignListingEnd);

csvWriter.writeRecords(featurePhotosData)
  .then(() => {
    console.log("path: ./seed/postgres/csv/feature_photos.csv");
    console.log("featurePhotosDataGen.js Almost Complete!");
    console.log("featurePhotosDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });