import express from "express";
const router = express.Router();
import initKnex from "knex";
import knexfile from "../knexfile.js";

const knex = initKnex(knexfile);


//Get all doctors
router.get("/", async (req, res) => {
    try {
        const doctors = await knex("doctors");
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving doctors." });
    }
});
export default router;

//Get all patients for a given doctor
router.get("/:doctorId/patients", async (req, res) => {
    const { doctorId } = req.params;
    try {
        const patients = await knex('patients')
        .join('doctor_patient', 'patients.id', '=', 'doctor_patient.patient_id')
        .where('doctor_patient.doctor_id', doctorId)
        .select('patients.*')
        .orderBy('patients.last_name', 'asc');

        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : `${error}`});
    }
});