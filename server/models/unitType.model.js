const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const UnitTypeSchema = new mongoose.Schema(
    {
        bedrooms: {
            type: String,
            unique: true,
            required: [true, "{PATH} is required"]
        },
        bathrooms: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        sqft: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        units: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit"
        }]
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const UnitType = mongoose.model("UnitType", UnitTypeSchema);

module.exports = UnitType;