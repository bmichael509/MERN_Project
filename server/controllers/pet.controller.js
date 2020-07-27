// Contains the functions that will be executed when the corresponding route URL is visited

const Pet = require("../models/pet.model");
module.exports = {
    create(req, res) {
        Pet.create(req.body)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Pet.find()
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Pet.find({_id: req.params.id}) // if you are not going to use findById
        Pet.findById(req.params.id)
            .then((Pet) => {
                res.json(Pet);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Pet.findByIdAndDelete(req.params.id)
            .then((Pet) => {
                res.json(Pet);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    delete2(req, res) {
        Pet.deleteOne({ _id: req.params.id })
            .then((Pet) => {
                res.json(Pet);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    // This one gives you the removed Pet.
    delete3(req, res) {
        Pet.findById(req.params.id)
            .then((Pet) => {
                Pet
                    .remove()
                    .then((removedPet) => {
                        res.json(removedPet);
                    })
                    .catch((err) => {
                        res.json(err);
                    })
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        Pet.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Pet) => {
                res.json(Pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
    update2(req, res) {
        Pet.findById(req.params.id)
            .then((Pet) => {
                Pet
                    .update(req.body, { runValidators: true })
                    .then((status) => {
                        res.json(status);
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
