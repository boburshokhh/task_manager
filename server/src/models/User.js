const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });
    User.prototype.comparePassword = (password) =>{
        return bcrypt.compareAsync(candiat)
    }

    return User;
};
