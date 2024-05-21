const express = require('express');
const router = express.Router();

const EmployeeDetails = require("../Models/EmployeeSchema");
const BikeDetails = require("../Models/BikeDetails")
console.log("**********",BikeDetails)

router.get("/employee",async (req,res)=>{
    try {
        const employees = await EmployeeDetails.find();
        console.log("********")
        console.log(employees);
        res.json(employees);
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/bikes",async (req,res)=>{
    try {
        const employees = await BikeDetails.find();
        console.log("********")
        console.log(employees);
        res.json(employees);
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/add-bikes", async (req, res) => {
    const { loginEmployee, selectedBike, currentDateTime } = req.body;
    console.log("****brand, model, year *",loginEmployee, selectedBike, currentDateTime )

    const newBike = new BikeDetails({
        loginEmployee,
        selectedBike,
        currentDateTime
    });

    try {
        const savedBike = await newBike.insertOne();
        res.json(savedBike);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;