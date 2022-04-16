const router = require("express").Router();
const dishRouter = require("../routes/dish.routes");

router.use("/dish", dishRouter);


module.exports = router;