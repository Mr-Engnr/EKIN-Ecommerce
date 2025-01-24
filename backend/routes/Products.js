const express = require("express");
const {
  createProduct,
  fetchProducts,
  fetchProductById,
  updateProductById,
  fetchProductYouMayAlsoLike,
  fetchProductBySearch,
} = require("../controllers/Product");
const { isAuth } = require("../constants/services");
const router = express.Router();
router
  .get("/fetchProducts", fetchProducts)
  .get("/fetchProductById/:id", fetchProductById)
  .get("/fetchProductYouMayAlsoLike", isAuth(), fetchProductYouMayAlsoLike)
  .get("/fetchProductBySearch", fetchProductBySearch)
  .post("/createProduct", createProduct)
  .patch("/updateProductById/:id", updateProductById);
exports.router = router;
const { Product } = require("../models/Product");

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = { router };