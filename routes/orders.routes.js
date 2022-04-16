const router = require("express").Router();

const OrderController = require("../controller/order.controller")

router.get("/all", OrderController.getAllOrders);
router.get("/:id", OrderController.getOrderById);
router.post("/add", OrderController.addNewOrder);
module.exports = router