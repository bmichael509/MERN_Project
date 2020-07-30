const port = 8000;
const db_name = "propertyManagement";
const express = require("express");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

require("./config/mongoose.config")(db_name);

// app.use(cookieParser());

app.use(cors({ credentials: true, orgin: "http://localhost:3000" }));
// for our server to receive JSON: req.body will be undefined without this
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Long form:
// const routesFunct = require("./routes/city.routes");
//routesFunc(app)

// Short hand, impor tht efunction from routes.js and immediately execute it
require("./routes/contract.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/employee.routes")(app);
require("./routes/issue.routes")(app);
require("./routes/property.routes")(app);
require("./routes/unit.routes")(app);
require("./routes/unitType.routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond to`);
});
