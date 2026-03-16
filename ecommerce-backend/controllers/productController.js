const Product = require("../models/product")

// Get all products with search, filter, sorting
exports.getProducts = async (req, res) => {

 try {

  const { search, category, sort } = req.query

  let query = {}

  // Search by product name
  if (search) {
   query.name = { $regex: search, $options: "i" }
  }

  // Filter by category
  if (category) {
   query.category = category
  }

  let productsQuery = Product.find(query)

  // Sorting
  if (sort) {
   productsQuery = productsQuery.sort(sort)
  }

  const products = await productsQuery

  res.status(200).json(products)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

}


// Get single product (for Product Detail page)
exports.getProductById = async (req, res) => {

 try {

  const product = await Product.findById(req.params.id)

  if (!product) {
   return res.status(404).json({ message: "Product not found" })
  }

  res.status(200).json(product)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

}


// Create product
exports.createProduct = async (req, res) => {

 try {

  const product = await Product.create(req.body)

  res.status(201).json(product)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

}


// Update product
exports.updateProduct = async (req, res) => {

 try {

  const product = await Product.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  )

  if (!product) {
   return res.status(404).json({ message: "Product not found" })
  }

  res.status(200).json(product)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

}


// Delete product
exports.deleteProduct = async (req, res) => {

 try {

  const product = await Product.findByIdAndDelete(req.params.id)

  if (!product) {
   return res.status(404).json({ message: "Product not found" })
  }

  res.status(200).json({ message: "Product deleted successfully" })

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

}