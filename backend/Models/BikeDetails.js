const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const BikeDetails = mongoose.model("BikeDetails", bikeSchema);

module.exports = BikeDetails;