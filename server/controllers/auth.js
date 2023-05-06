const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const router = express.Router();

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (existinguser) {
            return res.status(404).json({ message: "User already Exist." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({
            name,
            email,
            password: hashedPassword,
        });
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

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        User.findOne({ email: email }, (err, doc) => {
            console.log(doc);
            if (err) { } else {
                if (!doc) { } else {
                    bcrypt.compare(password, doc.password, function (error, response) {
                        console.log(response);
                        const token = jwt.sign({ doc }, "top_secret");
                        res.status(200).json({ token });
                    });
                }
            }
        });
    } catch (error) { 
        
    }

    // passport.authenticate("login", async(err, user, info) => {
    //     try {
    //         if (err || !user) {
    //             const error = new Error("No User Found");
    //             console.log("Yellow", err);
    //             return next(error);
    //         }
    //         req.login(user, { session: false }, async(error) => {
    //             if (error) return next(error);
    //             const body = {
    //                 _id: user._id,
    //                 name: user.name,
    //                 email: user.email,
    //                 gender: user.gender,
    //             };
    //             const token = jwt.sign({ user: body }, "top_secret");
    //             return res.json({ token });
    //         });
    //     } catch (error) {
    //         return next(error);
    //     }
    // })(req, res, next);
};

module.exports = router;