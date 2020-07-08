const Product = require('../models/Product')
// @desc Get all products
// @route Get /api/v1/products
// @access Public
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ succcess: true, count: products.length, data: products })
  } catch(err) {
    console.log(err);
    res.status(400).json({ success: false })

  }
} 

// @desc Get single
// @route Get /api/v1/products/:id
// @access Public
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if(!product) {
      return res.status(400).json({ success: false})
    }
    res.status(200).json({ success: true, data: product})
  } catch(err) {
    console.log(err);
    res.status(400).json({ success: false })
  }
} 

// @desc Create product
// @route Post /api/v1/products/
// @access Public
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json({
      success: true,
      data: product
    })
  } catch(err) {
    console.log(err);
    res.status(400).json({ success: false })
  }
} 

// @desc Update product
// @route Put /api/v1/products/:id
// @access Public
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if(!product) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  }catch(err) {
    console.log(err);
    return res.status(400).json({ success: false })
  }
} 

// @desc Delete product
// @route DELETE /api/v1/products/:id
// @access Public
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id)
    if(!product) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: product })
  }catch(err) {
    console.log(err);
    return res.status(400).json({ success: false })
  }
} 