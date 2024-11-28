const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt');

function jwtSingUser(user ){
        const ONE_WEEK = 60*60*24*7;
        return jwt.sign(user,config.authentication.jwtSecret ,{
            expiresIn:ONE_WEEK
        })
}

module.exports = {
    jwtSingUser,
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
                where: {email: email}
            });

            if (!user) {
                throw new Error('Пользователь с таким email не найден.');
            }

            // Проверка пароля
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Неправильный пароль.');
            }

            // Генерация токена
            const userJson = user.toJSON();
            const token = jwtSingUser(userJson);
            return {"user":userJson, token};
        } catch (err) {
            console.error(err);
            throw new Error(err.message || 'Ошибка при попытке входа.');
        }
    }
};
