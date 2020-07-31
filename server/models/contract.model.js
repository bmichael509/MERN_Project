const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const CustomerSchema = new mongoose.Schema(
    {
        customer: {
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
            unique: true,
            required: [true, "{PATH} is required"],
        },
        previousAddress: {
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
            required: [true, "{PATH} is required"]
        },
        infoVerifiedBy: {
            type: String,
            required: false,
        },
        customerFinancialCheck: {
            status: {
                type: String,
                required: [true, "{PATH} is required"],
                minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
            },
            notes: {
                type: String,
                required: false,
            },
            required: false
        }
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
