const { UserGameHistory } = require('../models');

module.exports = {
    create: async(req, res, next) => {
        try {
            const user = req.user;

            const { activity_description } = req.body;

            const log = UserGameHistory.create({
                user_game_id: user.id,
                is_login: 1,
                activity_description: activity_description
            }); 

            return res.status(200).json({
                status: false,
                message: 'success',
                data: log
            });
        } catch(error) {
            next(error);
        }
    },

    getHistory: async (req, res, next) => {
        try {
            const user = req.user;

            const log = await UserGameHistory.findAll({where: {user_game_id: user.id}});

            return res.status(200).json({
                status: false,
                message: 'success',
                data: log
            });
        } catch (error) {
            next(error)
        }
    }
};
