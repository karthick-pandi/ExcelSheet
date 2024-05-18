const express = require('express');
const router = express.Router();

const EmployeeDetails = require("../Models/EmployeeSchema")

router.get("/add-employee",async (req,res)=>{
    try {
        const employees = await EmployeeDetails.find();
        console.log(employees);
        res.json(employees);
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


module.exports = router;