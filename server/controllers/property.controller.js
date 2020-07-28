// Contains the functions that will be executed when the corresponding route URL is visited

const Property = require("../models/property.model");
module.exports = {
    create(req, res) {
        Property.create(req.body)
            .then((property) => {
                res.json(property);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Property.find()
            .then((propertys) => {
                res.json(propertys);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Property.find({_id: req.params.id}) // if you are not going to use findById
        Property.findById(req.params.id)
            .then((Property) => {
                res.json(Property);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Property.findByIdAndDelete(req.params.id)
            .then((Property) => {
                res.json(Property);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        Property.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Property) => {
                res.json(Property);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
