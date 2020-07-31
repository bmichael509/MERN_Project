const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const EmployeeSchema = new mongoose.Schema(
    {
        employee: {

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
        },
        role: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
