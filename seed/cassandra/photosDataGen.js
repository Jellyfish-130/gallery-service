const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cassandraSeed = require('./cassandraSeed.js');

const photosDataGen = (start, end, foreignRmStart, foreignRmEnd, foreignListStart, foreignListEnd) => {

  const photos = [];
  for (let i = start; i <= end; i++) {

    const listingId = faker.random.number({ min: foreignListStart, max: foreignListEnd });
    const roomId = faker.random.number({ min: foreignRmStart, max: foreignRmEnd });
    const randomRoom = ['Living room', 'Full kitchen', 'Bedroom', 'Full bathroom 2', 'Full bathroom 1', 'Common space', 'Exterior', 'Outdoor space'];
    const roomName = randomRoom[faker.random.number({ min: 0, max: randomRoom.length - 1 })];
    const path = ['a', 'b', 'c'];
    const photo = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${faker.random.number({ min: 1, max: 50 }) + path[faker.random.number({ min: 0, max: 2 })]}.jpg`;
    const photoCaption = faker.lorem.sentence();

    const photosEntry = {
      listing_id: listingId,
      room_id: roomId,
      photo_id: i,
      room_name: roomName,
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
  path: "./csv/photos15.csv",
  header: [
    { id: "listing_id", title: "listing_id" },
    { id: "room_id", title: "room_id" },
    { id: "photo_id", title: "photo_id" },
    { id: "room_name", title: "room_name" },
    { id: "photo_url", title: "photo_url" },
    { id: "photo_caption", title: "photo_caption" },
  ],
});

const photosData = photosDataGen(cassandraSeed.photoStart, cassandraSeed.photoEnd, cassandraSeed.foreignRoomStart, cassandraSeed.foreignRoomEnd, cassandraSeed.foreignListingStart, cassandraSeed.foreignListingEnd);

csvWriter.writeRecords(photosData)
  .then(() => {
    console.log("path: ./seed/cassandra/sample_csv/photos.csv");
    console.log("photosDataGen.js Almost Complete!");
    console.log("photosDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });