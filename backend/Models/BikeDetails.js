const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
});

const BikeDetails = mongoose.model("BikeDetails", bikeSchema);

module.exports = BikeDetails;