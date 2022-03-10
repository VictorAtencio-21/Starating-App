const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.use(express.json());

router.post("/register", async (req, res) => {
    var error = []; // <- string array that determines which error there is **NOT-FINAL**
    const {name} = req.body.nombre; 
    const {ap} = req.body.apellido; 
    const {username} = req.body.user; 
    const {email} = req.body.email; 
    const {password} = req.body.pass; 
    const {confirmPassword} = req.body.confirm; 

    //Verifying logic
    
    /*Verify username (unique)*/

    /*Verify email (unique)*/

    //Verify Passwords

    if(!(password == confirmPassword)){
        error.push("Both password fields are not the same. Please type the same password");
    }else{
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            console.error(error.message)
        }
    }

    if(error.length){
        /*Register logic to the mongo database*/ 


        res.sendStatus(201).send("Succesful Register")
    }else{
        res.sendStatus(400);
        error.forEach(element => res.send(element));    
    }
});

router.post("/login", async (req, res) => {
    /*Aunthenticate*/ 
});

//Keeping a log of user requests:
router.use(async (req, res, next) => {
    console.log(req.body);
    next();
})

module.exports = router;