const unitControler = require("../controllers/unit.controller")

module.exports = (app) => {
    app.post("/api/units", unitControler.create);
    app.get("/api/units", unitControler.getAll);
    app.get("/api/units/:id", unitControler.getOne);
    app.put("/api/units/:id", unitControler.update)
    app.delete("/api/units/:id", unitControler.delete);
}