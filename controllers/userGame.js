const { UserGame } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

// const {
//     JWT_SIGNATURE_KEY
// } = process.env;

module.exports = {
    updateUsername: async (req, res, next) => {
        try {
            const user = req.user;
            const { new_username } = req.body;

            if ( new_username == user.username ) {
                return res.status(400).json({
                    status: false,
                    message: 'failed to change username, you still use the old username!'
                });
            }

            const newUsername = await UserGame.update({
                username: new_username }, {
                    where: {
                    username: user.username 
                }
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: newUsername
            });
        } catch (error) {
            next(error)
        }
    },

    getThisUserDetails: async (req, res, next) => {
        try {
            const user = req.user;

            const userDetails = await UserGame.findOne({
                attributes: ['username', 'email', 'createdAt']}, { 
                    where: { 
                        id: user.id 
                    } 
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: userDetails
            });
        } catch (error) {
            next(error)
        }
    },

    getAllUsername: async (req, res, next) => {
        try {
            const allUserGame = await UserGame.findAll({
                attributes: ['username', 'email', 'createdAt']
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: allUserGame
                
            });
        } catch (error) {
            next(error)
        }
    },

    deleteUser: async (req, res, next) => { 
        try {
            const user = req.user;
            
            const userToBeDeleted = await UserGame.destroy({
                where: {
                    username: user.username
                }
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: userToBeDeleted
            });
        } catch (error) {
            next(error);
        }
    }
};
