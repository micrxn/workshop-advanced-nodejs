const express = require("express");
const dishRouter = require("./const/dish.router");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(dishRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
    console.log(`Server is running at pot: ${PORT}`)
})