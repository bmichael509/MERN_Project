const unitTypeControler = require("../controllers/unitType.controller")

module.exports = (app) => {
    app.post("/api/unitTypes", unitTypeControler.create);
    app.get("/api/unitTypes", unitTypeControler.getAll);
    app.get("/api/unitTypes/:id", unitTypeControler.getOne);
    app.put("/api/unitTypes/:id", unitTypeControler.update)
    app.delete("/api/unitTypes/:id", unitTypeControler.delete);
}