const mongoose = require("mongoose");
const Address = require("./address.model").schema;

// {PATH} will insert the name of the key / prop

const PersonSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        lastName: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
        phoneNumber: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
        currentAddress: {
            type: Address,
            required: false
        },
        status: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;