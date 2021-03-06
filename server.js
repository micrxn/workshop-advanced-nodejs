const express = require("express");
const dishRouter = require("./const/dish.router");
const ordersRouter = require("./const/order.router")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(dishRouter);
app.use(ordersRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
    console.log(`Server is running at pot: ${PORT}`)
})