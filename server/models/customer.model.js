const mongoose = require("mongoose");
const Address = require("./address.model");
const FinancialCheck = require("./financialCheck.model");
const Person = require("./person.model");

// {PATH} will insert the name of the key / prop

const CustomerSchema = new mongoose.Schema(
    {
        customer: {
            type: Person,
            unique: true,
            required: [true, "{PATH} is required"],
        },
        previousAddress: {
            type: Address,
            required: [true, "{PATH} is required"]
        },
        infoVerifiedBy: {
            type: String,
            required: false,
        },
        customerFinancialCheck: {
            type: FinancialCheck,
            required: false
        }
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;