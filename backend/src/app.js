const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.route.js");

const conectMongoDB = require("./config/conectMongoDB.js");

// Conecta banco de dados
conectMongoDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Aplicação backend userRegisterApp desenvolvida por Ícaro Machado de Carvalho"
  );
});
app.use("/api/users", authRoutes);

module.exports = app;
