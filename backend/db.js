const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const { username, password, database, port } = process.env;

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.nnbxv.mongodb.net/${database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
