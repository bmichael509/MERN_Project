// Contains the functions that will be executed when the corresponding route URL is visited

const UnitType = require("../models/unitType.model");
module.exports = {
    create(req, res) {
        UnitType.create(req.body)
            .then((unitType) => {
                res.json(unitType);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        UnitType.find().populate({ path: "property", populate: "unit" })
            .then((unitTypes) => {
                res.json(unitTypes);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // UnitType.find({_id: req.params.id}) // if you are not going to use findById
        UnitType.findById(req.params.id).populate({ path: "property", populate: "unit" })
            .then((UnitType) => {
                res.json(UnitType);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        UnitType.findByIdAndDelete(req.params.id)
            .then((UnitType) => {
                res.json(UnitType);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        UnitType.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((UnitType) => {
                res.json(UnitType);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
