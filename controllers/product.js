getAllProduct = (req, res) => {
    res.status(200).json({ mag: "Product" })
}
getAllProductTesting = (req, res) => {
    res.status(200).json({ mag: "Product testing" })
}

module.exports = { getAllProduct, getAllProductTesting }