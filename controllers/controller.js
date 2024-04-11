const Employee = require('../models/employee');


exports.getDefault = function(req,res){
res.send("You are in default path");
};

exports.aboutUs = function(req,res){
    res.send("You are in About us");
};

exports.addEmployee = function(req,res){
    console.log("POST start");
    const Emp = new Employee();
        Emp.empName = req.body.empName;
        Emp.empPass = req.body.empPass;
        Emp.save()
        .then(msg => res.send({"message": "created " + Emp.empName}));
        
        console.log("POST END");
};

exports.getEmployee = function(req,res){
    console.log("getEmployee start");

    Employee.find({})
    .then(employeeData => res.send(employeeData))
    .catch(err=>console.log(err));

    
        console.log("getEmployee END");
};

exports.updateEmployee = function(req,res){
    console.log("POST start");
    const Emp = new Employee();
        let empName = req.body.empName;
        let newPass = req.body.empPass;
        let empToFind = empName;
        Employee.findOneAndUpdate(
            {empName : empToFind},
            {$set : {empPass : newPass}},
            {new : true}
        )
        .then(result  => {
            if(!result)
             res.send({message : empName +" not updated"});
            else
             res.send({message : empName +" updated successfuly"});  
        }).catch(err=>res.send({message : "Error in update"+err})
        );
        
        console.log("POST END");
};