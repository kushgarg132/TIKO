import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrainSchema = new Schema(
{
    trainName: {
        type: String,
        required: true
    },
    trainNumber: {
        type: Number,
        required: true
    },
    journeyDay: {
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    },
    acCoaches: [
        {
            coachNumber: {
                type: Number,
                required: true
            },
            capacity: {
                type: Number,
                required: true
            }
        }
    ],
    sleeperCoaches: [
        {
            coachNumber: {
                type: Number,
                required: true
            },
            capacity: {
                type: Number,
                required: true
            }
        }
    ],
    route: [
        {
            stationName: {
                type: String,
                required: true
            },
            stationCode: {
                type: String,
                required: true
            },
            arrivalDay:{
                type: String,
                required: true
            },
            arrivalTime: {
                type: String,
                required: true
            },
            departureTime: {
                type: String,
                required: true
            },
            haltDuration: {
                type: Number,
                required: true
            },
            distanceFromStart: {
                type: Number,
                required: true
            }
        }
    ]

}, { collection: "train_info" })

export default mongoose.model("train_info", TrainSchema);