module.exports = app => {
    const employees = require("../controllers/employeeController");

app.post("/employees",employees.create);
app.get("/employees",employees.list);
app.put("/employees/:employeeFirstName",employees.update);
app.delete("/employees/:employeeFirstName",employees.delete);
}