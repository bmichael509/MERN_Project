const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        petType: {
            type: String,
            required: [true, "Pet Type is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        petDescription: {
            type: String,
            required: [true, "Pet Description is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        skillOne: {
            type: String
        },
        skillTwo: {
            type: String
        },
        skillThree: {
            type: String
        },
        likeCount: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;