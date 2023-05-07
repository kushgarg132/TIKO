import Users from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10)

    let user = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        mobile: req.body.mobile,
        gender: req.body.gender,
        dob: moment(req.body.dob).format('YYYY-MM-DD')
    }
    let newUser = new Users(user)

    newUser.save((err, result) => {
        if (err) console.log(err)
        else res.status(201).json(result)
    })

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

};

export const profile = async (req, res) => {
    res.json({
        user: req.user,
        token: req.query.secret_token
    })
};