const { Client } = require("pg");

// const DB_URI = (process.env.NODE_ENV === "test")
//   ? {host:"localhost", port:5432, database:"MagicTheGathering_test", user:"postgres", password:"postgres"}
//   : {host:"localhost", port:5432, database:"MagicTheGathering", user:"postgres", password:"postgres"};

//   let db = new Client({
//     host:"localhost", 
//     port:5432, 
//     database:"books", 
//     user:"postgres", 
//     password:"postgres"});

let DB_URI;

if(process.env.NODE_ENV === "test"){
  DB_URI = "postgresql:///MagicTheGathering_test";
} else {
  DB_URI = {host:"localhost", port:5432, database:"MagicTheGathering", user:"postgres", password:"postgres"};
}

let db = new Client(
  {host:"localhost", port:5432, database:"MagicTheGathering", user:"postgres", password:"postgres"}
)
  
db.connect();

module.exports = db;