const Employee = require("../modules/employeesModel");

exports.create= (req,res) =>{
    //make sure that it is valid
    if(!req.body){
        res.status(400).send({
            message: "The fields cannot be empty"
        });
    }
    const employee = new Employee({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        Age : req.body.Age,

    });

    Employee.create(employee,(err,data) =>{
        console.log(data);
        if(err){
            res.status(500).send({
                message: err.message || "An error has occurred"
            });

        }else{
            res.send(data);
        }
    });
};

exports.list = (req,res) =>{
    Employee.list((err,data) =>{

        if(err){
            res.status(500).send({
                message: err.message || "An error has occurred"
            });

        }else{
            res.send(data);
        }

    });
};

exports.update = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: "Fields cannot be empty!"
        });
    }
    Employee.updateByName(req.params.employeeFirstName,new Employee(req.body),(err,data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: "Employee not found with first name"
                });
            }
            else{
                res.status(500).send({
                    message: "Error updating employee"
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.delete = (req,res) =>{
    Employee.delete(req.params.employeeFirstName,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message:"Couldn't find employee"
                });
            }else{
                res.status(500).send({
                    message: "Couldn't delete employee"
                });
            }
        }
        else{
            res.send({
                message: "Delete was successful"
            });
        };
    });
};
