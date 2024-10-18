const express = require("express");
const app = express();
const {NotFoundError} = require("./expressError");
const cors = require("cors");

const userRoutes = require("./routes/users");
const deckRoutes = require("./routes/decks");

const morgan = require("morgan")

//parses all data into json
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/users",userRoutes);
app.use("/decks",deckRoutes);

//handle 404
app.use(function(req,res,next){
    return next(new NotFoundError());
})

//generis handler that handles anything else
app.use(function (err,req,res,next){
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error:{message,status},
    });
});

module.exports = app;