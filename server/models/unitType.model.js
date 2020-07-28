const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const UnitTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        bathrooms: {
            type: Number,
            required: [true, "{PATH} is required"],
        },
        bedrooms: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        squareFootage: {
            type: Number,
            required: [true, "{PATH} is required"],
        },
        rentalAmount: {
            type: Number,
            required: [true, "{PATH} is required"],
        },
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const UnitType = mongoose.model("UnitType", UnitSchema);

module.exports = UnitType;