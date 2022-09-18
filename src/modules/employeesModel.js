const db = require("./db");
const table = "employees";

const Employee = function(employee){
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.Age = employee.Age;
};

Employee.list = result=>{
    db.query(`SELECT * FROM ${table}`,(err,res)=>{
        if(err){
            console.log("Error encountered: ",err);
            result(null,err);
            return;
        }
        console.log("Employees",res);
        result(null,res);

    });
};
Employee.create = (newEmp,result) =>{
    db.query(`INSERT INTO ${table} SET ?`,newEmp,(err,res)=>{
        if(err){
            console.log("Error encountered: ",err);
            result(null,err);
            return;
        }
        console.log("Employee successfully created!");
        result(null,res);
    });
};
Employee.updateByName = (firstName,employee,result) =>{
    db.query(`UPDATE ${table}  SET firstName = ? , lastName = ? , Age= ? WHERE firstName = ?`,[employee.firstName,employee.lastName,employee.Age,firstName],(err,res) =>{
        if(err){
            console.log("Error encountered: ",err);
            result(null,err);
            return;
        }
        if(res.affectedRows == 0){
            result({kind: "not_found"},null);
            return;
        }
    });
};

Employee.delete = (firstName,res)=>{
    db.query(`DELETE FROM ${table} WHERE firstName = ?`,firstName,(err,result) =>{
        if(err){
            console.log("Error encountered: ",err);
            result(null,err);
            return;
        }
        if(res.affectedRows == 0){
            result({kind: "not_found"},null);
            return;
        }

    });
};
module.exports = Employee;