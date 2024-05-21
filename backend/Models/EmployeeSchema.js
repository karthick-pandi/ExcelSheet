const mongoose = require("mongoose");

const employeeSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const employee = new mongoose.model("EmployeeDetails", employeeSchema )
module.exports = employee;
