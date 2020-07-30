const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const AddressSchema = new mongoose.Schema(
    {
        street: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        city: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
        state: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
        zipCode: {
            type: Number,
            required: [true, "{PATH} is required"],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters"]
        },
        country: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;