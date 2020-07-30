const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const FinancialCheckSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const FinancialCheck = mongoose.model("FinancialCheck", FinancialCheckSchema);

module.exports = FinancialCheck;