const { User } = require('../models');

module.exports = {
    async register(email, password) {
        try {
            const user = await User.create({ email, password });
            return user.toJSON();
        } catch (err) {
            console.error(err);
            throw new Error('This email account is already in use.');
        }
    }
};
