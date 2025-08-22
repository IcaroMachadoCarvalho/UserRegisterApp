const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.route.js");

const conectMongoDB = require("./config/conectMongoDB.js");

// Conecta banco de dados
conectMongoDB();
// Para permitir do frontend fazer requisições
app.use(
  cors({
    origin: "http://localhost:4200", // Or a list of allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
app.use(express.json());


app.get("/", (req, res) => {
  res.send(
    "Aplicação backend userRegisterApp desenvolvida por Ícaro Machado de Carvalho"
  );
});
app.use("/api/users", authRoutes);

module.exports = app;
