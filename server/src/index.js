const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Импортируйте настроенный Sequelize
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");

const app = express();

// Middlewares
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// Routes
require("./routes")(app);

// Запуск сервера после синхронизации с базой данных
sequelize
    .sync()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`);
        });
    })
    .catch((error) => {
        console.error("Unable to start server:", error);
    });
