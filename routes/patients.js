import express from "express";
const router = express.Router();
import initKnex from "knex";
import knexfile from "../knexfile.js";

const knex = initKnex(knexfile);

//helper function for validation, returns strcuture with {valid: bool, ?message:}
const validatePatient = (data) => {
    if (!data) {
        return { valid: false, message: "No patient data provided." };
    }
    const {
        first_name,
        last_name,
        date_of_birth,
        medical_history
    } = data;
    
    //check for missing fields
    if (!first_name || !last_name || !date_of_birth){
        return {
            valid: false, message: "first name, last name, and DOB are required."
        }
    }
    return { valid: true };
}

//Get all patients
router.get("/", async (req, res) => {
    try {
        const patients = await knex("patients");
        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving patients." });
    }
});

//adding a new patient
router.post("/", async (req, res) =>{
    const {patientData, doctor_id }= req.body;

    //validate request body
    const validation = validatePatient(patientData);
    if(!validation.valid){
        return res.status(400).json({ message: validation.message });
    }
    try {
        //using a transaction to ensure both operations succeed or fail together
        await knex.transaction(async (trx) => {
            // insert patient into the db
            const [newPatientId] = await knex("patients").insert(patientData);

            // insert into doctor_patient table
            await trx("doctor_patient").insert({
                doctor_id: doctor_id,
                patient_id: newPatientId
            });

            //fetch the newly created patient
            const newPatient = await trx("patients").where({ id: newPatientId }).first();

            //respond with the new patient details
            res.status(201).json(newPatient);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "an error occurred while creating this patient"});

    }
});

//getting the handover note given patient id
router.get("/:id/handover", async(req, res) => {
    const { id } = req.params;
    try{
        const patient = await knex("patients").where({id}).first();
        if(!patient) {
            return res.status(404).json({message: "patient not found"});
        }
        res.status(200).json(patient.handover_note);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "error retrieving handover note"});
    }
});

//updating handover note given patient id
router.put("/:id/handover", async(req, res) => {
    const { id } = req.params;
    const { handover_note } = req.body;
    try{
        const updated = await knex("patients")
        .where({id})
        .update({handover_note}, ["handover_note"]);
        if(!updated) {
            return res.status(404).json({message: "patient not found"});
        }
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "error updating handover note"});
    }
});

//getting patient given their id
router.get("/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const patient = await knex("patients").where({ id }).first();

        if(!patient) {
            return res.status(400).json({message: `patient with ID: ${id} not found`});
        }
        res.status(200).json(patient);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error retrieving this patient"});
    }
});


export default router;