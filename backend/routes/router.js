const express = require('express');
const router = express.Router();

const EmployeeDetails = require("../Models/EmployeeSchema");
const BikeDetails = require("../Models/BikeDetails")


router.get("/employee",async (req,res)=>{
    try {
        const employees = await EmployeeDetails.find();
        res.json(employees);
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/bikes",async (req,res)=>{
    try {
        const employees = await BikeDetails.find();
        res.json(employees);
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/add-bikes", async (req, res) => {
    const { loginEmployee, selectedBike, currentDateTime } = req.body;
    const newBike = new BikeDetails({
        name:loginEmployee,
        vehicle:selectedBike,
        createdAt:currentDateTime
    });

    try {
        const savedBike = await newBike.save();
        res.json(savedBike);
    } catch (err) {
        console.log("e",err)
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;