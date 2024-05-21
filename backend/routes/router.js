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
    const { brand, model, year } = req.body;
    colsole.log("****brand, model, year *",brand, model, year )

    const newBike = new BikeDetails({
        brand,
        model,
        year
    });

    try {
        const savedBike = await newBike.save();
        res.json(savedBike);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;