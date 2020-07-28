// Contains the functions that will be executed when the corresponding route URL is visited

const Employee = require("../models/employee.model");
module.exports = {
    create(req, res) {
        Employee.create(req.body)
            .then((employee) => {
                res.json(employee);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Employee.find()
            .then((employees) => {
                res.json(employees);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Employee.find({_id: req.params.id}) // if you are not going to use findById
        Employee.findById(req.params.id)
            .then((Employee) => {
                res.json(Employee);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Employee.findByIdAndDelete(req.params.id)
            .then((Employee) => {
                res.json(Employee);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        Employee.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Employee) => {
                res.json(Employee);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
