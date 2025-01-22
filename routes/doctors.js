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