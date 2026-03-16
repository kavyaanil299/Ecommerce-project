require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/dbConnection");

const authRoutes = require("./routes/authenticationRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/profile",userProfileRoutes);
app.use("/api/analytics",analyticsRoutes);

app.use(errorHandler);

app.listen(process.env.PORT,()=>{
 console.log("Server running on port",process.env.PORT);
});