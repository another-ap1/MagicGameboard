const express = require("express");
const Deck = require("../models/decks");
const router = new express.Router();

//get all decks for currenr user
router.get("/:id", async (req, res, next) => {
    try{
        const decks = await Deck.getDecks(req.params.id)
        return res.json(decks);
    }catch(e){
        return next(e)
    }
})

router.post("/addDeck", async (req, res, next) => {
    try{
        const {commander, colors, users_id} = req.body;
        const addDeck = await Deck.addDeck(commander, colors, users_id);
        return res.json(addDeck);
    }catch(e){
        return next(e)
    }
})

router.delete("/deleteDeck", async (req, res, next) => {
    try{
        const {id} = req.body;
        const deleteDeck = await Deck.deleteDeck(id)
        return res.json(deleteDeck);
    }catch(e){
        return next(e)
    }
})

module.exports = router;