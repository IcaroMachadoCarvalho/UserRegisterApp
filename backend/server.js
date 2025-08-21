require("dotenv").config();
const app = require("./src/app.js");

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  // Chama o run conect database
});
