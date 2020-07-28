const contractControler = require("../controllers/contract.controller")

module.exports = (app) => {
    app.post("/api/contracts", contractControler.create);
    app.get("/api/contracts", contractControler.getAll);
    app.get("/api/contracts/:id", contractControler.getOne);
    app.put("/api/contracts/:id", contractControler.update)
    app.delete("/api/contracts/:id", contractControler.delete);
}