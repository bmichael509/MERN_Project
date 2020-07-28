const mongoose = require("mongoose");
const UnitType = require("./unitType.model");

// {PATH} will insert the name of the key / prop

const UnitSchema = new mongoose.Schema(
    {
        contract: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contract",
            required: [true, "{PATH} is required"],
        }],
        status: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        unitType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UnitType",
            required: false
        },
        property: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Property",
            required: true
        },
        issue: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue",
            required: false
        }],
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Unit = mongoose.model("Unit", UnitSchema);

module.exports = Unit;