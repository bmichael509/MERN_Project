const Property = require("../models/property.model");
const Unit = require("../models/unit.model");

const UnitType = require("../models/unitType.model");
const unitController = require("./unit.controller");
module.exports = {
    getOnePropertyWithUnits(req, res) {
        // Author.find({_id: req.params.id}) // if you are not going to use findById
        Property.findById("5f20b99dffa86e4ab417b6f8").populate({
            path: 'unit',
            populate: { path: "unitType" }
        })
            .then((Unit) => {
                res.json(Unit);
            })
            .catch((err) => {
                res.json(err);
            })
    }
};
