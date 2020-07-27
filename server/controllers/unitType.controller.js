// Contains the functions that will be executed when the corresponding route URL is visited
const UnitType = require("../models/unitType.model");
const Unit = require("../models/unit.model");

module.exports = {
    create(req, res) {
        UnitType.create(req.body)
            .then((unitType) => {
                res.json(unitType);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        UnitType.find()
            .then((unitTypes) => {
                res.json(unitTypes);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    getOne(req, res) {
        UnitType.findById(req.params._id)
            .then((unitType) => {
                res.json(unitType);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        UnitType.findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((unitType) => {
                res.json(unitType);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        UnitType.findByIdAndDelete(req.params._id)
            .then((unitType) => {
                res.json(unitType);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    getAllUnits(req, res) {
        UnitType.findById(req.params._id)
            .then((unitType) => {
                let units = unitType.populate('units');
                res.json(units);
            })
            .catch((err) => {
                res.json(err);
            })
    },
}