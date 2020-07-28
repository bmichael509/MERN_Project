const customerControler = require("../controllers/customer.controller")

module.exports = (app) => {
    app.post("/api/customers", customerControler.create);
    app.get("/api/customers", customerControler.getAll);
    app.get("/api/customers/:id", customerControler.getOne);
    app.put("/api/customers/:id", customerControler.update)
    app.delete("/api/customers/:id", customerControler.delete);
}