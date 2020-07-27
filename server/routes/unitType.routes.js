const unitTypeController = require("../controllers/unitType.controller");

module.exports = (app) => {
    app.post("/api/unitTypes", unitTypeController.create);
    app.get("/api/unitTypes", unitTypeController.getAll);
    app.get("/api/unitTypes/:_id/units", unitTypeController.getAllUnits);
    app.get("/api/unitTypes/:_id", unitTypeController.getOne);
    app.put("/api/unitTypes/:_id", unitTypeController.update)
    app.delete("/api/unitTypes/:_id", unitTypeController.delete);
};