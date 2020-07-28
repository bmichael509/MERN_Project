const mongoose = require("mongoose");
const Deposit = require("./deposit.model");

// {PATH} will insert the name of the key / prop

const ContractSchema = new mongoose.Schema(
    {
        length: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        moveInDate: {
            type: Date,
            required: [true, "{PATH} is required"]
        },
        moveOutDate: {
            type: Date,
            required: [true, "{PATH} is required"]
        },
        monthlyAmount: {
            type: Number,
            required: [true, "{PATH} is required"]
        },
        status: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        deposit: {
            type: Deposit,
            required: [true, "{PATH} is required"]
        },
        unitType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UnitType",
            required: [true, "{PATH} is required"],
        },
        customer: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: [true, "{PATH} is required"],
        }],
        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit",
            required: [true, "{PATH} is required"],
        },
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Contract = mongoose.model("Contract", ContractSchema);

module.exports = Contract;