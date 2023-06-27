import express from "express";
const router = express.Router();

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

router.get("/", function (req, res) {
  res.json(products);
});

router.get("/:id", function (req, res) {
  const getId = req.params.id;
  res.json(products[getId]);
});

router.post("/", function (req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json(products);
});

router.delete("/:id", function (req, res) {
  const deleteProductId = req.params.id;
  products.splice(deleteProductId, 1);
  console.log(products);
  res.json({ deleteProductId });
});

router.patch("/:id", function (req, res) {
  const updateProduct = products[req.params.id];
  if (req.body.hasOwnProperty("name")) {
    updateProduct.name = req.body.name;
  }
  if (req.body.hasOwnProperty("price")) {
    updateProduct.price = req.body.price;
  }
  res.json(updateProduct);
});

export default router;
