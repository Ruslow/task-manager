const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(createProduct);

router
  .get("/:id", getProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

module.exports = router;
