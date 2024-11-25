const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSingUser(user ){
        const ONE_WEEK = 60*60*24*7;
        return jwt.sign(user,config.authentication.jwtSecret ,{
            expiresIn:ONE_WEEK
        })
}
module.exports = {
    async register(email, password) {
        try {
            const user = await User.create({ email, password });
            return {info:user.toJSON(),token: jwtSingUser(user.toJSON())};
        } catch (err) {
            console.error(err);
            throw new Error('Этот email уже используется.');
        }
    },

    async login(email, password) {
        try {
            const user = await User.findOne({
                where: { email: email }
            });

            if (!user) {
                return null;
            }

            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                return null;
            }

            return user.toJSON();
        } catch (err) {
            console.error(err);
            throw new Error('Ошибка при попытке входа.');
        }
    },
};
