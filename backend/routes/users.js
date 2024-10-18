const express = require("express");
const User = require("../models/user");
const router = new express.Router();

//get all current users from the database
router.get("/", async (req,res,next) => {
    try{
        const users = await User.getAll();
        return res.json(users);
    } catch(e){
        return next(e);
    }
})

//add a new user to the database
router.post("/addUser", async function(req, res, next){
    try{
        const {username, firstname} = req.body;
        const user = await User.createUser(username,firstname);
        return res.json(user);
    }catch(e){
        return next(e);
    }
})

//edit a current user in the database
router.patch("/edit", async function(req, res, next){
    try{
        const {username, firstname, id} = req.body;
        const editUser = await User.editUser(username, firstname, id);
        return res.json(editUser);
    }catch(e){
        return next(e);
    }
})

//delete a current user from the database
router.delete("/delete", async function(req,res,next){
    try{
        const {id} = req.body;
        const deleteUser = await User.deleteUser(id);
        return res.json(deleteUser);
    }catch(e){
        return next(e);
    }
})

module.exports = router;