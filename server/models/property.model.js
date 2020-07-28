const mongoose = require("mongoose");
const Address = require("./address.model").schema;

// {PATH} will insert the name of the key / prop

const PropertySchema = new mongoose.Schema(
    {
        address: {
            type: Address,
            unique: true,
            required: [true, "{PATH} is required"],
        },
        employee: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: false,
        }],
        unit: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit",
            required: false,
        }],
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;