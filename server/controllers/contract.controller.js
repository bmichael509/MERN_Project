// Contains the functions that will be executed when the corresponding route URL is visited

const Contract = require("../models/contract.model");
module.exports = {
    create(req, res) {
        Contract.create(req.body)
            .then((contract) => {
                res.json(contract);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Contract.find()
            .then((contracts) => {
                res.json(contracts);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Contract.find({_id: req.params.id}) // if you are not going to use findById
        Contract.findById(req.params.id)
            .then((Contract) => {
                res.json(Contract);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Contract.findByIdAndDelete(req.params.id)
            .then((Contract) => {
                res.json(Contract);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        Contract.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Contract) => {
                res.json(Contract);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
};
