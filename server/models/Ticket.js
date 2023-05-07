import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    
    pnr: { type: String, unique: true },
    passenger: [
        {
            userName: {
                type: String,
                required: true
            },
            userAge: {
                type: Number,
                required: true
            },
            userGender: {
                type: String,
                required: true
            }
        }
    ],
    departureStation: {
        type: String,
        required: true,
    },
    departureDateTime: {
        type: Date,
        required: true,
    },
    arrivalStation: {
        type: String,
        required: true,
    }, 
    arrivalDateTime: {
        type: Date,
        required: true,
    },
    trainNumber: {
        type: String,
        required: true,
    },
    trainName: {
        type: String,
        required: true,
    },
    trainClass: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
}, { collection: "ticket" });

export default mongoose.model("ticket", TicketSchema);
