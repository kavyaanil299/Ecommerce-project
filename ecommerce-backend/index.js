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

app.use(cors({
  origin: "https://ecommerce-project-git-main-kavyaanil299s-projects.vercel.app",
  credentials: true
}));



/* BODY PARSER */
app.use(express.json());

/* DATABASE CONNECTION */
connectDB();

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/profile", userProfileRoutes);
app.use("/api/analytics", analyticsRoutes);

/* ERROR HANDLER (ALWAYS LAST) */
app.use(errorHandler);

/* DEFAULT ROUTE (OPTIONAL BUT GOOD) */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/*  PORT FIX (fallback added) */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});