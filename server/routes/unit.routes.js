const unitController = require("../controllers/unit.controller");

module.exports = (app) => {
    app.post("/api/units", unitController.create);
    app.get("/api/units", unitController.getAll);
    app.get("/api/units/:_id", unitController.getOne);
    app.put("/api/units/:_id", unitController.update)
    app.delete("/api/units/:id", unitController.delete);
    app.get("/api/units/:_id/type", unitController.getUnitType);
};