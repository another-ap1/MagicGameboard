const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");

class User {
    static async createUser(username, firstname) {
        const duplicateCheck = await db.query(
            `SELECT username FROM users WHERE username = $1`,[username],
        );

        if(duplicateCheck.rows[0]){
            throw new BadRequestError(`Duplicate username: ${username}`);
        }

        const res = await db.query(
            `INSERT INTO users (username,firstname) 
            VALUES ($1, $2)`,[username,firstname],
        )

        return res.rows[0];
    }

    static async get(username) {
        const res = await db.query(
            `SELECT username
            FROM users
            WHERE username = $1`,[username]);

        const user = res.rows[0];

        if(!user) throw new NotFoundError(`No user with ${username} username`);

        return user
    }

    static async getAll(){
        const res = await db.query(
            `SELECT *
            FROM users
            ORDER BY username`,
        );
        return res.rows;
    }

    static async editUser(username, firstname, id){
        
        const res = await db.query(
            `UPDATE users 
            SET username=$1, firstname=$2 
            WHERE id=$3`,[username, firstname, id],
        );
        return res.rows[0];
    }

    static async deleteUser(id){
        let res = await db.query(
            `DELETE FROM users
            WHERE id = $1
            RETURNING username`,[id],
        );
        return res.rows[0];
    }
}

module.exports = User;