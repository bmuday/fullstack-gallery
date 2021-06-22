const express = require("express");
const app = express();

const path = require("path");

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS POLICY
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// STUFF ROUTES
const stuffRoutes = require("./routes/stuff");
app.use("/api/stuff", stuffRoutes);

// USER ROUTES
const userRoutes = require("./routes/user");
app.use("/api/auth", userRoutes);

// STATIC ASSETS(IMAGES)
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
