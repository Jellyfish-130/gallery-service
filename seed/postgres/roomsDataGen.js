const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const postgreSQLSeed = require('./postgreSQLSeed.js');

const roomsDataGen = (start, end, foreignStart, foreignEnd) => {
  const rooms = [];
  for (let i = start; i <= end; i++) {

    const listingId = faker.random.number({ min: foreignStart, max: foreignEnd });
    const randomRoom = ['Living room', 'Full kitchen', 'Bedroom', 'Full bathroom 2', 'Full bathroom 1', 'Common space', 'Exterior', 'Outdoor space'];
    const roomName = randomRoom[faker.random.number({ min: 0, max: randomRoom.length - 1 })];

    const roomsEntry = {
      room_id: i,
      listing_id: listingId,
      room_name: roomName,
    };
    rooms.push(roomsEntry);

    if (i === (end / 4)) {
      console.log(i);
    } else if (i === (end / 2)) {
      console.log(i);
    } else if (i === end) {
      console.log('Records Created: ', i)
    }
  };
  return rooms;
};

const csvWriter = createCsvWriter({
  path: "./csv/rooms.csv",
  header: [
    { id: "room_id", title: "room_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "room_name", title: "room_name" },
  ],
});

const roomsData = roomsDataGen(postgreSQLSeed.roomStart, postgreSQLSeed.roomEnd, postgreSQLSeed.foreignListingStart, postgreSQLSeed.foreignListingEnd);

csvWriter.writeRecords(roomsData)
  .then(() => {
    console.log("path: .seed/postgres/csv/rooms.csv");
    console.log("roomsDataGen.js Almost Complete!");
    console.log("roomsDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });