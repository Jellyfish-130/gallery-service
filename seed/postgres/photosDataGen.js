const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const recordsFile = require('./records.js');

const photosDataGen = (records) => {
  const photos = [];
  for (let i = 1; i <= records; i++) {

    const listingId = faker.random.number({ min: 1, max: records });
    const roomId = faker.random.number({ min: 1, max: records });
    const path = ['a', 'b', 'c'];
    const photo = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${faker.random.number({ min: 1, max: 50 }) + path[faker.random.number({ min: 0, max: 2 })]}.jpg`;
    const photoCaption = faker.lorem.sentence();

    const photosEntry = {
      photo_id: i,
      listing_id: listingId,
      room_id: roomId,
      photo_url: photo,
      photo_caption: photoCaption,
    };
    photos.push(photosEntry);

    if (i === 1000) {
      console.log(i);
    } else if (i === 10000) {
      console.log(i);
    } else if (i === records) {
      console.log('Records Created: ', i)
    }
  };
  return photos;
};

const csvWriter = createCsvWriter({
  path: "./sample_csv/photos.csv",
  header: [
    { id: "photo_id", title: "photo_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "room_id", title: "room_id" },
    { id: "photo_url", title: "photo_url" },
    { id: "photo_caption", title: "photo_caption" },
  ],
});

const photosData = photosDataGen(recordsFile.photoRecords);

csvWriter.writeRecords(photosData)
  .then(() => {
    console.log("path: ./sample_csv/photos.csv");
    console.log("photosDataGen.js Almost Complete!");
    console.log("photosDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });