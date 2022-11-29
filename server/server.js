const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const catRoutes = require("./routes/cat");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripe");

const app = express();

// .env file configuration
dotenv.config();

// Connecting the MongoDB database
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cat-adoption')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

// Cors Middleware
app.use(cors());

// Create api routes for different routes created
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cats", catRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

// Create a port number to listen
app.listen(process.env.PORT || 3001, () => {
  console.log(`Backend server is running on port ${process.env.PORT}`);
});
