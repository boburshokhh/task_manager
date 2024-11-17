const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

fs.readdirSync(__dirname)
    .filter((file) => file !== 'index.js' && file.endsWith('.js')) // Фильтрация по имени и расширению
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Подключение модели
        db[model.name] = model; // Сохранение модели в объекте db
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Экспорт соединения и всех моделей
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
