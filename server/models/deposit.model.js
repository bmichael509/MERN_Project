const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const DepositSchema = new mongoose.Schema(
    {
        depositAmount: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        dateReceived: {
            type: Date,
            required: [true, "{PATH} is required"]
        },
        paymentType: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        checknumber: {
            type: Number,
            required: false
        },
        depositPaid: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        depositReturned: {
            type: Number,
            required: [true, "{PATH} is required"]
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
const Deposit = mongoose.model("Deposit", DepositSchema);

module.exports = Deposit;