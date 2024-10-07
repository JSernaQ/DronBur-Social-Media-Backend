const { User } = require("../models/user.model");
const { Profile } = require("../models/profile.model");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../middleware/generateJWT");
const { encrypt, decrypt } = require("../middleware/bcrypt");

const loginController = async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (!decrypt(password, user.password)) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const generatedToken = generateJWT(user);

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: generatedToken
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };

};

const registerController = async (req, res) => {
    try {
        const { username, password, email, name, birthdate } = req.body;
        const hashedPassword = encrypt(password);

        const userExist = await User.findOne({ username });
        const emailExist = await User.findOne({ email });

        if (!birthdate || !name) {
            return res.status(400).json({ 
                success: false,
                message: "Some fields are required"     
            });
        }

        if (userExist || emailExist) {
            return res.status(400).json({
                success: false,
                message: "Username or Email already exists"
            });
        }

        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();

        const newProfile = new Profile({ user: newUser, name, birthdate });
        await newProfile.save();  

        return res.status(201).json({ 
            success: true,
            message: "User created successfully",
            user: { username: newUser.username, email: newUser.email },
            profile: newProfile,
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            err: error
        });
    }
};

module.exports = {
    loginController,
    registerController
}