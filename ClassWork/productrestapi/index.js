const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

const file = "product.json";

// GET all products
app.get("/products", (req, res) => {
    const data = fs.readFileSync(file, "utf-8");
    res.json(JSON.parse(data));
});

// GET product by ID
app.get("/products/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    const product = data.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// POST a new product
app.post("/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));

    const newProduct = {
        id: data.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    data.push(newProduct);

    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.status(201).json(newProduct);
});

// PUT update product
app.put("/products/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    const index = data.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    data[index] = {
        id: data[index].id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.json(data[index]);
});

// DELETE product
app.delete("/products/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    const index = data.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = data.splice(index, 1)[0];

    fs.writeFileSync(file, JSON.stringify(data, null, 2));

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});