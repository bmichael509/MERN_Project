const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const ContractBaseSchema = new mongoose.Schema(
    {
        customer: {
            firstName: {
                type: String,
                unique: true,
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
                type: Address,
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
        contract: {
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
                type: Number,
                required: [true, "{PATH} is required"]
            }
        },
        unit: {
            property: {
                address: {
                    street: {
                        type: String,
                        unique: true,
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
                    }
                },
                manager: {
                    firstName: {
                        type: String,
                        unique: true,
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
                    }
                }
            },
            number: {
                type: Number,
                required: [true, "{PATH} is required"],
            },
            status: {
                type: String,
                required: [true, "{PATH} is required"],
            },
            issue: {
                issueName: {
                    type: String,
                    required: [true, "{PATH} is required"],
                },
                issueDate: {
                    type: Date,
                    required: [true, "{PATH} is required"],
                },
                issueStatus: {
                    type: String,
                    required: [true, "{PATH} is required"],
                },
            },
            bedrooms: {
                type: String,
                required: [true, "{PATH} is required"],
            },
            bathrooms: {
                type: Number,
                required: [true, "{PATH} is required"],
            },
            squareFootage: {
                type: Number,
                required: [true, "{PATH} is required"],
            },
            rentAmount: {
                type: Number,
                required: [true, "{PATH} is required"],
            }
        },
        notes: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const ContractBase = mongoose.model("Unit", ContractBaseSchema);

module.exports = ContractBase;