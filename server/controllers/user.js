import Users from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import moment from "moment";

export const signup = async (req, res) => {
    const { name, email, password ,mobile,gender,dob} = req.body;

    try {
      const existinguser = await Users.findOne({ email });
      if (existinguser) {
        return res.status(404).json({ message: "User already Exist." });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      console.log(hashedPassword);
      const newUser = await Users.create({
        name,
        email,
        password: hashedPassword,
        mobile,
        gender,
        dob,
        is_admin:false
      });
      console.log("biiii");
      const token = jwt.sign(
        { email: newUser.email, id: newUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: newUser, token });
    } catch (error) {
      res.status(500).json("Something went worng...");
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await Users.findOne({ email });
        if (!existinguser) {
            return res.status(404).json({ message: "User don't Exist." });
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { email: existinguser.email, id: existinguser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ result: existinguser, token });
    } catch (error) {
        res.status(500).json("Something went worng...");
    }

};

export const profile = async (req, res) => {
    res.json({
        user: req.user,
        token: req.query.secret_token
    })
};