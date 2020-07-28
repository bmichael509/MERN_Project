// Contains the functions that will be executed when the corresponding route URL is visited

const Customer = require("../models/customer.model");
module.exports = {
    create(req, res) {
        Customer.create(req.body)
            .then((customer) => {
                res.json(customer);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Customer.find()
            .then((customers) => {
                res.json(customers);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Customer.find({_id: req.params.id}) // if you are not going to use findById
        Customer.findById(req.params.id)
            .then((Customer) => {
                res.json(Customer);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Customer.findByIdAndDelete(req.params.id)
            .then((Customer) => {
                res.json(Customer);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        Customer.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Customer) => {
                res.json(Customer);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
