import express from "express";
import cors from "cors";
import "dotenv/config";
import doctorRoutes from "./routes/doctors.js";
import patientRoutes from "./routes/patients.js";


const app = express();
const port = process.env.PORT || process.argv[2] || 8080;

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});

//start server
app.listen(port, () => {
    console.log(`Server running at ${process.env.
    BACKEND_URL || "http://localhost:"}${port}`);
});