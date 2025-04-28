const userModel = require("../models/user.models");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({status: false, errors: errors.array()});
        } else {
            const {name, email, password} = req.body;
            const emailExists = await userModel.find({email: email});
            if(emailExists) {
                return res.json({success: false, errors: [{
                    type: "field",
                    value: email,
                    msg: "Email already exists.",
                    path: "email",
                    location: "body",
                }]});
            } else {
                const salt = await bcrypt.genSalt(10);
                const secPassword = await bcrypt.hash(password, salt);
                const userData = new userModel({
                    name: name,
                    email: email,
                    password: secPassword,
                    date: Date.now()
                });
                const userDb = await userData.save(userData);
                const token = jwt.sign({id: userDb._id}, process.env.JSON_WEB_TOKEN_SECRET);
                res.json({success: true, token});
            }
        }
    } catch (error) {
        res.json({success: false, errors: error.message});
    }
}

const userLogin = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({status: false, errors: errors.array()});
        } else {
            const {email, password} = req.body;
            const emailExists = await userModel.findOne({email: email});
            if(!emailExists) {
                return res.json({success: false, errors: [{
                    type: "field",
                    value: email,
                    msg: "Email does not exists.",
                    path: "email",
                    location: "body"
                }]});
            } else {
                const passwordCompare = await bcrypt.compare(password, emailExists.password);
                if(!passwordCompare) {
                    return res.json({success: false, errors: [{
                        type: "field",
                        value: "password",
                        msg: "Password not valid.",
                        path: "password",
                        location: "body"
                    }]});
                } else {
                    const token = jwt.sign({id: emailExists._id}, process.env.JSON_WEB_TOKEN_SECRET);
                    res.json({success: true, token});
                }
            }
        }
    } catch (error) {
        res.json({success: false, errors: error.message});
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userModel.findById(userId).select("-password");
        res.json({success: true, user});
    } catch (error) {
        res.json({success: false, errors: error.message});
    }    
}

module.exports = {userSignup, userLogin, getUser};