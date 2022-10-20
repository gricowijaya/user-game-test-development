const { UserGameBiodata } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

// const {
//     JWT_SIGNATURE_KEY
// } = process.env;

module.exports = {
    createBiodata: async(req, res, next) => {
        try {
            const user = req.user;
            const { fullname, birthdate, description } = req.body;

            const createUserBiodata = UserGameBiodata.create({
                user_game_id: user.id,
                fullname: fullname,
                birthdate: birthdate,
                description: description
            }); 

            return res.status(200).json({
                status: false,
                message: 'success',
                data: createUserBiodata
            });
        } catch(error) {
            next(error);
        }
    },

    getBiodataDetails: async (req, res, next) => {
        try {
            const user = req.user;

            const biodata = await UserGameBiodata.findOne({
                attributes: ['fullname', 'birthdate', 'description']}, { 
                    where: { 
                        user_game_id: user.id 
                    } 
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: biodata
            });
        } catch (error) {
            next(error)
        }
    },

    updateBiodata: async (req, res, next) => {
        try {
            const user = req.user;

            const { fullname, birthdate, description } = req.body;

            const updateUserBiodata = UserGameBiodata.update({
                fullname: fullname,
                birthdate: birthdate,
                description: description
            }, {
                where : {
                    user_game_id: user.id
                }
            }); 

            return res.status(200).json({
                status: false,
                message: 'success',
                data: updateUserBiodata
            });
        } catch (error) {
            next(error)
        }
    },

    deleteBiodata: async (req, res, next) => { 
        try {
            const user = req.user;
            
            const biodataToBeDeleted = await UserGameBiodata.destroy({
                where: {
                    user_game_id: user.id
                }
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: biodataToBeDeleted
            });
        } catch (error) {
            next(error);
        }
    }
};
