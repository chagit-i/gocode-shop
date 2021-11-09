const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.static("client/build"));
const productSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});
const Product = mongoose.model("Product", productSchema);
// app.get("/products", (req, res) => {
//   Product.find((err, products) => {
//     res.send(products);
//   });
// });
app.get("/api/products", (req, res) => {
  const { title } = req.query;
  Product.find((err, products) => {
    if (title) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    res.send(products);
  });
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, product) => {
    res.send(product);
  });
});

app.post("/api/products", (req, res) => {
  const { title } = req.body;
  const product = new Product({
    title,
    userId: 1,
    price: 600,
    description: "New Description",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  });
  product.save((err, product) => {
    res.send(product);
  });
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  Product.findByIdAndUpdate(id, { price }, { new: true }, (err, product) => {
    res.send(product);
  });
});
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  Product.findByIdAndDelete(id, (err, product) => {
    if (err) {
      res.send("ID wasnt found");
    }
    res.send(product);
  });
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const initProducts = () => {
  Product.findOne((err, product) => {
    console.log("product", product);

    if (!product) {
      fs.readFile("./products.json", "utf8", (err, data) => {
        const products = JSON.parse(data);
        Product.insertMany(products, (err, productsRes) => {
          console.log("err", err);
          console.log("productsRes", productsRes);
        });
      });
    }
  });
};
console.log("process.env DB_USER", process.env.DB_USER);
const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  // "mongodb://localhost/gocode_shop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Ani Maazin");
      initProducts();
    });
  }
);
