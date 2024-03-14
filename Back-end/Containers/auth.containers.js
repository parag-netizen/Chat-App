import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokensandCookie from "../Utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confPassword, gender } = req.body;

        if (password != confPassword) {
            return res.status(400).json({ error: "Password and Confirm password do not match" })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "User already exists!!!" });
        }

        //PASSWORD HASH
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const Boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const Girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newuser = new User({
            fullname,
            username,
            password: hashedPassword,
            confPassword,
            gender,
            profilepic: gender === "male" ? Boypic : Girlpic
        })

        if (newuser) {
            //Generate JWT token here
            generateTokensandCookie(newuser._id, res);
            await newuser.save();
            console.log(newuser._id);
            res.status(201).json({
                _id: newuser._id,
                fullname: newuser.fullname,
                username: newuser.username,
                gender: newuser.gender,
                profilepic: newuser.profilepic
            });
        }
        else {
            res.status(400).json({
                error: "Invalid user data"
            })
        }

    }
    catch (error) {
        console.log("error in Signup controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
};
export const login = async (req, res) => {

    try {

        const { username, password } = req.body
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or Password" })
        }

        generateTokensandCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullname,
            username: user.username,
            profilePic: user.profilepic
        })

    } catch (error) {
        console.log("error in Signup controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }

};
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        console.log("error in Signup controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
};