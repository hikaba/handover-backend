import express from "express";
const router = express.Router();
import initKnex from "knex";
import knexfile from "../knexfile.js";

const knex = initKnex(knexfile);


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
export default router;