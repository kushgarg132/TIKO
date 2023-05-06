const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({
    trainName: {
        type: String
    },
    trainType: {
        type: String
    },
    trainNumber: {
        type: String
    },
    startCity: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    }
}, {collection: "buses"})

const train = mongoose.model('train', BusSchema)

module.exports = train;