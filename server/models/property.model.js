const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const PropertySchema = new mongoose.Schema(
    {
        propertyName: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        address: {
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
const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
