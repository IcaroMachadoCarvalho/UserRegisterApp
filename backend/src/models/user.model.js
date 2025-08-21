// Importando o Mongoose para trabalhar com o MongoDB
const mongoose = require("mongoose");

// Definindo o esquema do usuário, que define a estrutura dos dados
const userSchema = mongoose.Schema({
  username: {
    type: String, // O tipo do campo é uma string
    required: true, // O campo é obrigatório
    unique: true, // O valor do campo deve ser único na coleção
  },

  password: {
    type: String, 
    required: true, 
    minlength: 6, 
  },

  email: {
    type: String, 
    required: true, 
    unique: true, 
  },

  accessCode: {
    type: String, 
    default: "", // Caso o campo não seja preenchido, o valor será uma string vazia
  },
});

// Criando o modelo "User" a partir do esquema definido, para interagir com a coleção "users" no banco de dados
const User = mongoose.model("User", userSchema);

module.exports = User;

// Schema é a definição de como os dados devem ser armazenados.
// Model é o objeto que permite que você interaja e manipule esses dados no banco de dados.
