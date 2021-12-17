const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const product = await Product.findOne({ _id: taskID });
    res.status(201).send({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const product = await Product.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteProduct = async (req, res) => {
  const { id: taskID } = req.params;
  const product = await Product.findOneAndDelete({ _id: taskID });
  res.status(200).json({ product });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
