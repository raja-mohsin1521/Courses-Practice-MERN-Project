const userModel = require('../Users/users-model');
var bcrypt = require('bcryptjs');

// Handler for the home route
const home = (req, res) => {
    try {
        res.status(200).send('My First Router');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error'); // Added error response
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password, isAdmin } = req.body;

        // Validate required fields
        
        // Check if the user already exists
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            console.log('User Exists');
            return res.status(400).json({ message: 'User already exists' });
        } else {
            // Hash the user's password
            var salt = bcrypt.genSaltSync(10);
            var hashPassword = await bcrypt.hashSync(password, salt);

            // Create a new user
            const userCreated = await userModel.create({
                username,
                email,
                phone,
                password: hashPassword,
                isAdmin
            });

            console.log('Done');
            res.status(200).json({
                message: req.body,
                token: await userCreated.generateToken()
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error'); // Added error response
    }
};

// Handler for the about route
const about = (req, res) => {
    try {
        res.status(200).send('My About');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error'); // Added error response
    }
};

module.exports = { home, register, about };
