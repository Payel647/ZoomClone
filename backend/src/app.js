import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectTosocket } from "./controller/soketmaneger.js";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectTosocket(server);
app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true}));

app.get("/home", (req, res) => {
 return res.json({"hello": "world"})
});
const start =async()=>{
    app.set("mongo_user");
    const connectionDb= await mongoose.connect("mongodb+srv://mallickpayel647:eSAm6AofW3PeEVUJ@cluster0.ltg60yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MONGO Connect DB HOst: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Server is running on port 8000");
    });
}
start()