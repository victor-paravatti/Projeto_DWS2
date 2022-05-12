const User = require("../models/User");
const { route } = require("./Auth");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();
const {verifyToken} = require("express").Router;

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
            ).toString()
    }

    try{    
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
        {
            $set: req.body,
        },  
        {new:true}
        );
        res.status(200).json(updateUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//delete 
router.delete("/:id", verifyTokenAndAuthorization,async (req,res)=>{ 
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Usuario foi deletado")
    }catch(err){
        res.status(500).json(err)
    }
})
//GET USER
router.get("/find/:id", verifyTokenAndAdmin,async (req,res)=>{ 
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json("Usuario foi deletado")
        const {password, ...others} = user._doc;

        res.status(200).json({others});
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router