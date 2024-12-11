const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsControl = require("./controllers/SongsController")

module.exports = (app) => {
    app.post("/register",
        AuthenticationControllerPolicy.register, // Middleware для проверки валидации
        async (req, res) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send({ error: "Email и пароль обязательны" });
            }
            try {
                const user = await AuthenticationController.register(email, password);
                res.status(201).send({ message: "User registered successfully", user });
            } catch (err) {
                res.status(400).send({ error: err.message });
            }
        }
    );
    app.post("/login",
        async (req, res) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send({ error: "Email и пароль обязательны" });
            }
            try {
                const user = await AuthenticationController.login(email, password);
                if (!user) {
                    return res.status(403).send({ error: "Неправильный логин или пароль" });
                }
                res.status(200).send({
                    message: "User login successful",
                    User: user
                });
            } catch (err) {
                res.status(500).send({ error: err.message });
            }
        }
    );
    app.get("/songs",SongsControl.index)
    app.post("/songs",SongsControl.post)
};
