const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const recordsFile = require('./records.js');

const featurePhotosDataGen = (records) => {

  const featurePhotos = [];
  for (let i = 1; i <= records; i++) {

    const listingId = faker.random.number({ min: 1, max: records })
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

    if (i === 1000) {
      console.log(i);
    } else if (i === 10000) {
      console.log(i);
    } else if (i === records) {
      console.log('Records Created: ', i)
    }
  };
  return featurePhotos;
};

const csvWriter = createCsvWriter({
  path: "./sample_csv/feature_photos.csv",
  header: [
    { id: "feature_photo_id", title: "feature_photo_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "photo_1_url", title: "photo_1_url" },
    { id: "photo_2_url", title: "photo_2_url" },
  ],
});

const featurePhotosData = featurePhotosDataGen(recordsFile.featurePhotosRecords);

csvWriter.writeRecords(featurePhotosData)
  .then(() => {
    console.log("path: ./sample_csv/feature_photos.csv");
    console.log("featurePhotosDataGen.js Almost Complete!");
    console.log("featurePhotosDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });