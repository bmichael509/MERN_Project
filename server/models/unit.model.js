const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const UnitSchema = new mongoose.Schema(
    {
        number: {
            type: String,
            unique: true,
            required: [true, "{PATH} is required"]
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UnitType"
        }
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Unit = mongoose.model("Unit", UnitSchema);

module.exports = Unit;