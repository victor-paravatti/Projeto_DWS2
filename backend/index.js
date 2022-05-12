const express = require("express");
const app = express();
const mongosse = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/User");
const authRoute = require("./routes/Auth");
const exp = require("constants");
dotenv.config();



mongosse.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("DBconnect sucessfull"))
    .catch((err)=>{
    console.log("err")
    })

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend");
})