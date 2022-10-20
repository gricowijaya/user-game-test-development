const { UserGame } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    JWT_SIGNATURE_KEY
} = process.env;

module.exports = {
    register: async (req, res, next) => {
        try {
            const {username, email, password } = req.body;

            const existUser = await UserGame.findOne({ where: { username: username } });
            if (existUser) {
                return res.status(409).json({
                    status: false,
                    message: 'username already used!'
                });
            }

            const encryptedPassword = await bcrypt.hash(password, 10);

            const user = await UserGame.create({
                username: username,
                email: email,
                password: encryptedPassword
            });
            
            console.log(user)

            return res.status(201).json({
                status: true,
                message: 'success',
                data: {
                    username: user.username,
                    email: user.email
                }
            });
        } catch (err) {
            // console.log(err);
            // next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            const user = await UserGame.findOne({ where: { username: username } });
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'email or password doesn\'t match!'
                });
            }

            const correct = await bcrypt.compare(password, user.password);
            if (!correct) {
                return res.status(400).json({
                    status: false,
                    message: 'email or password doesn\'t match!'
                });
            }

            // generate token
            payload = {
                id: user.id,
                username: user.username,
                email: user.email,
            };

            const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    token: token
                }
            });
        } catch (err) {
            // console.log(err)
            // next(err);
        }
    },

    whoami: (req, res, next) => {
        const user = req.user;

        try {
            return res.status(200).json({
                status: false,
                message: 'success',
                data: user
            });
        } catch (err) {
            next(err);
        }
    },

    changePassword: async (req, res, next) => {
        try {
            const { old_password, new_password, confirm_new_password } = req.body;

            const user = req.user;

            const userToBeChanged = await UserGame.findOne({ where: { id: user.id } });

            const correct = await bcrypt.compare(old_password, userToBeChanged.password);


            const update = await UserGame.update({
                password: bcrypt.hash(new_password, 10),
            }, {
                where : { id: user.id }
            });


            if (correct) { 
                if ( new_password == confirm_new_password) {
                    console.log("It's the same password");
                }
            } else if (!correct) {
                return res.status(400).json({
                    status: false,
                    message: 'email already used!'
                });
            }

            return res.status(200).json({
                status: false,
                message: 'success',
                data: update 
            });
        } catch (error) {
            next(error)
        }
    }
};
