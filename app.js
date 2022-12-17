const express=require('express');
const app=express();

const dotenv=require('dotenv');
const mongoose=require("mongoose");
const cors=require('cors');
dotenv.config();

app.use(cors());
app.use(express.json({limit:'5mb'}));
app.use("/",require("./routes/posts"));

mongoose.set("strictQuery",true);
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("Connected to DB"));

app.listen(process.env.PORT,()=>{
    console.log("Server is Running at Port ",process.env.PORT);
});
