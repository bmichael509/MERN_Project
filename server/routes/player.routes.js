const petControler = require("../controllers/pet.controller")

module.exports = (app) => {
    app.post("/api/pets", petControler.create);
    app.get("/api/pets", petControler.getAll);
    app.get("/api/pets/:id", petControler.getOne);
    app.put("/api/pets/:id", petControler.update)
    app.delete("/api/pets/:id", petControler.delete);
}