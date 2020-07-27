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
        Unit.find()
            .then((units) => {
                res.json(units);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        Unit.findById(req.params._id)
            .then((unit) => {
                res.json(unit);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        Unit.findByIdAndUpdate(req.params._id, req.body, { runValidators: true, new: true, })
            .then((unit) => {
                res.json(unit);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Unit.findByIdAndDelete(req.params._id)
            .then((unit) => {
                res.json(unit);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getUnitType(req, res) {
        Unit.findById(req.params._id).populate("type")
            .then((type) => {
                res.json(type);
            })
            .catch((err) => {
                res.json(err);
            });
    },
}