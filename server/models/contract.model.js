const mongoose = require("mongoose");

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
                type: Boolean,
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
