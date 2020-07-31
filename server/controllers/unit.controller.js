// Contains the functions that will be executed when the corresponding route URL is visited

const Unit = require("../models/unit.model");
module.exports = {
    create(req, res) {
        Unit.create(req.body)
            .then((unit) => {
                res.json(unit);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Unit.find().populate({ path: 'unitType' }).populate({ path: 'property' })
            .then((units) => {
                res.json(units);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Unit.find({_id: req.params.id}) // if you are not going to use findById
        Unit.findById(req.params.id).populate({ path: 'unitType' })
            .then((Unit) => {
                res.json(Unit);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Unit.findByIdAndDelete(req.params.id)
            .then((Unit) => {
                res.json(Unit);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        Unit.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Unit) => {
                res.json(Unit);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
