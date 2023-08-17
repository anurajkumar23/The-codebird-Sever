const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const router = require('./router/route');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 9000; 
require('./database/connectDatabase')


const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cokkie());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",router);
app.get("/events", async(res, req) => {
    try{
        const events = await Event.find({});
        res.json(events);
    }
    catch(error){
        res.status(500).json({ error: "Internal server error"});
    }
});

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`)
})