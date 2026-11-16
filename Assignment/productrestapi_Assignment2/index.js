import express from "express";
import fs from "fs";

const app = express();
const PORT = 8000;

app.use(express.json());

const file = "product.json";

// GET all products
app.get("/products", (req, res) => {
    const products = JSON.parse(fs.readFileSync(file, "utf-8"));
    res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(file, "utf-8"));
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// POST product
app.post("/products", (req, res) => {
    const { name, price, category, stock } = req.body;

    if (!name || price === undefined || !category || stock === undefined) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const products = JSON.parse(fs.readFileSync(file, "utf-8"));

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
        stock
    };

    products.push(newProduct);

    fs.writeFileSync(file, JSON.stringify(products, null, 2));

    res.status(201).json(newProduct);
});

// PUT product
app.put("/products/:id", (req, res) => {
    const { name, price, category, stock } = req.body;

    if (!name || price === undefined || !category || stock === undefined) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const products = JSON.parse(fs.readFileSync(file, "utf-8"));

    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        id: products[index].id,
        name,
        price,
        category,
        stock
    };

    fs.writeFileSync(file, JSON.stringify(products, null, 2));

    res.json(products[index]);
});

// DELETE product
app.delete("/products/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(file, "utf-8"));

    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1)[0];

    fs.writeFileSync(file, JSON.stringify(products, null, 2));

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});