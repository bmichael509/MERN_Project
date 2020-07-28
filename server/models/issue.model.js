const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const IssueSchema = new mongoose.Schema(
    {
        issueType: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        status: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        receivedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: [true, "{PATH} is required"],
        },
        callBackNumber: {
            type: Number,
            required: false
        },
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
const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;