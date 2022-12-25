const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 4000;
const app = express();
app.use(cors());
// connect db
mongoose.set('strictQuery', true);
const connectDatabase = async () => {
    await mongoose.connect("mongodb+srv://pintu_mern-stack:pintu93@mern-project.4ux6lfb.mongodb.net/?retryWrites=true&w=majority")
}
// console.log(connectDatabase)
console.log('MongoDB connected')

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:4000")
})