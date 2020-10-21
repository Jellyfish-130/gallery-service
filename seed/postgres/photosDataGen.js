const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const postgreSQLSeed = require('./postgreSQLSeed.js');

const photosDataGen = (start, end, foreignRmStart, foreignRmEnd, foreignListStart, foreignListEnd) => {
  const photos = [];
  for (let i = start; i <= end; i++) {

    const listingId = faker.random.number({ min: foreignListStart, max: foreignListEnd });
    const roomId = faker.random.number({ min: foreignRmStart, max: foreignRmEnd });
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

    if (i === (end / 4)) {
      console.log(i);
    } else if (i === (end / 2)) {
      console.log(i);
    } else if (i === end) {
      console.log('Records Created: ', i)
    }
  };
  return photos;
};

const csvWriter = createCsvWriter({
  path: "./csv/photos19.csv",
  header: [
    { id: "photo_id", title: "photo_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "room_id", title: "room_id" },
    { id: "photo_url", title: "photo_url" },
    { id: "photo_caption", title: "photo_caption" },
  ],
});

const photosData = photosDataGen(postgreSQLSeed.photoStart, postgreSQLSeed.photoEnd, postgreSQLSeed.foreignRoomStart, postgreSQLSeed.foreignRoomEnd, postgreSQLSeed.foreignListingStart, postgreSQLSeed.foreignListingEnd);

csvWriter.writeRecords(photosData)
  .then(() => {
    console.log("path: ./seed/postgres/csv/photos.csv");
    console.log("photosDataGen.js Almost Complete!");
    console.log("photosDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });