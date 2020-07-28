const issueControler = require("../controllers/issue.controller")

module.exports = (app) => {
    app.post("/api/issues", issueControler.create);
    app.get("/api/issues", issueControler.getAll);
    app.get("/api/issues/:id", issueControler.getOne);
    app.put("/api/issues/:id", issueControler.update)
    app.delete("/api/issues/:id", issueControler.delete);
}