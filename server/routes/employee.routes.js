const employeeControler = require("../controllers/employee.controller")

module.exports = (app) => {
    app.post("/api/employees", employeeControler.create);
    app.get("/api/employees", employeeControler.getAll);
    app.get("/api/employees/:id", employeeControler.getOne);
    app.put("/api/employees/:id", employeeControler.update)
    app.delete("/api/employees/:id", employeeControler.delete);
}