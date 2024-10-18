const db = require("../db");
const {NotFoundError, BadRequestError} = require("../expressError")

class Deck {

    static async getDecks(id){
        const res = await db.query(
            `SELECT * FROM decks WHERE users_id = $1`,[id],
        );
        return res.rows;
    }

    static async addDeck(commander, colors, users_id){
        const res = await db.query(
            `INSERT INTO decks (commander, colors, users_id)
            VALUES ($1, $2, $3)
            RETURNING commander, colors, users_id`,[commander, colors, users_id],
        );
        return res.rows[0];
    }

    static async deleteDeck(id){
        const res = await db.query(
            `DELETE FROM decks
            WHERE id = $1
            RETURNING commander`,[id],
        );
        return res.rows[0];
    }

}

module.exports = Deck;