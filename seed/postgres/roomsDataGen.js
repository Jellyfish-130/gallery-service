const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const roomsDataGen = (records) => {
  const rooms = [];
  for (let i = 1; i <= records; i++) {
    i === 1000
      ? console.log(i)
      : i === 10000
        ? console.log(i)
        : i === 100000
          ? console.log(i)
          : i === records
            ? console.log('Records Created: ', records);

    const listingId = faker.random.number({ min: 1, max: records });
    const randomRoom = ['Living room', 'Full kitchen', 'Bedroom', 'Full bathroom 2', 'Full bathroom 1', 'Common space', 'Exterior', 'Outdoor space'];
    const roomName = randomRoom[faker.random.number({ min: 1, max: randomRoom.length })];

    const roomsEntry = {
      room_id: i,
      listing_id: listingId,
      room_name: roomName,
    };
    rooms.push(roomsEntry);
  };
  return rooms;
};

const csvWriter = createCsvWriter({
  path: "./sample_csv/rooms.csv",
  header: [
    { id: "room_id", title: "room_id" },
    { id: "listing_id", title: "listing_id" },
    { id: "room_name", title: "room_name" },
  ],
});

const roomsData = roomsDataGen(25);

csvWriter.writeRecords(roomsData)
  .then(() => {
    console.log("roomsDataGen.js Almost Complete!");
    console.log("roomsDataGen.js Generated!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });