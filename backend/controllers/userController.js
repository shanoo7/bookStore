import User from '../models/userModal.js'
import bcryptjs from 'bcryptjs'

//signUp
export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ message: "user already exists" })
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            username,
            email,
            password: hashPassword
        })
        await createUser.save()
        res.status(201).json({ message: "user created successfully from backend",
            user: {
                _id: createUser._id,
                username: createUser.username,
                email: createUser.email,
            } })
    } catch (error) {
        console.log("Error"+error.message)
        res.status(500).json({ message: "internal server error" })
    }
}

//logIn
export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!user || !isMatch) {
            res.status(400).json({ message: "invaild username or password" })
        } else {
            res.status(201).json({
                message: "login successfully", user: {
                    _id: user._id,
                    email: user.email,
                    password: user.password
                }
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "internal server error" })
    }

}