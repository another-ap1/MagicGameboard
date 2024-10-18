"use strict";

require("dotenv").config();

const SECRET_KEY = "magicthegathering";

const DB_URI = (process.env.NODE_ENV === "test")
  ? {host:"localhost", port:5432, database:"MagicTheGathering_test", user:"postgres", password:"postgres"}
  : {host:"localhost", port:5432, database:"MagicTheGathering", user:"postgres", password:"postgres"};



module.exports ={
    SECRET_KEY,
    DB_URI
}