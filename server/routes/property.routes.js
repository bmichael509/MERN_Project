const propertyControler = require("../controllers/property.controller");
const propertyUnitControler = require("../controllers/PropertyUnit.controller");

module.exports = (app) => {
    app.post("/api/properties", propertyControler.create);
    app.get("/api/properties", propertyControler.getAll);
    app.get("/api/properties/:id", propertyControler.getOne);
    app.put("/api/properties/:id", propertyControler.update)
    app.delete("/api/properties/:id", propertyControler.delete);
    app.get("/api/propertyUnits/:id", propertyUnitControler.getOnePropertyWithUnits);
}
