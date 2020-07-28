const mongoose = require("mongoose");
const Person = require("./person.model").schema;

// {PATH} will insert the name of the key / prop

const EmployeeSchema = new mongoose.Schema(
    {
        employee: {
            type: Person,
            unique: true,
            required: [true, "{PATH} is required"],
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