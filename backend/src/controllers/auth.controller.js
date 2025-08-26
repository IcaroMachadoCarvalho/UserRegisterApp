const generateToken = require("../services/generateToken");
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");

class authController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user?.password || ""
      );
      if (!user || !isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      // Gerar jwt e devolver front status 200
      // armazenar jwt
      const token = generateToken(user._id, username);
      res.status(200).json({ message: "Sucessful login", token });
    } catch (error) {
      console.log("Error in login controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async signUp(req, res) {
    try {
      const { username, email, password } = req.body;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "Username or email is already in use" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "Successful sign up" });
    } catch (error) {
      console.error("Error in signup controller:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      const foundUser = await User.findOne({ email: email });
      if (!foundUser) {
        return res.status(404).json({ error: "Username isn't registered" });
      }
      const accessCode = Math.floor(100000 + Math.random() * 900000); // Ex: 234829
      await User.updateOne({ email }, { accessCode });
      return res
        .status(200)
        .json({ message: "Created access code", accessCode: accessCode });
    } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async resetPassword(req, res) {
    try {
      const { email, accessCode, newPassword } = req.body;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      const foundUser = await User.findOne({ email: email });
      if (!foundUser) {
        return res.status(404).json({ error: "Username isn't registered" });
      }

      if (newPassword.length < 6) {
        return res
          .status(400)
          .json({ error: "The password must have 6 digits" });
      }

      // Verificar a validade do accessCode (por exemplo, expiração ou uso único)
      if (foundUser.accessCode !== accessCode) {
        return res.status(400).json({ error: "Invalid access code" });
      }

      // Gerar e salvar nova senha
      const salt = await bcrypt.genSalt(10);
      const hashedNewPassword = await bcrypt.hash(newPassword, salt);

      await User.updateOne(
        { email },
        {
          accessCode: "",
          password: hashedNewPassword,
        }
      );

      return res.status(200).json({ message: "Password successfully reset" });
    } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = authController;
