const express = require("express");
const { sequelize } = require("./models"); // Импортируйте настроенный Sequelize
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");

const app = express();

app.use(morgan("combined"));
app.use(express.json()); // Используйте встроенный express.json()
app.use(cors());

require("./routes")(app);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error", details: err.message });
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection to database has been established successfully.");
        return sequelize.sync();
    })
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

