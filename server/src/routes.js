const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
    app.post("/register",
        AuthenticationControllerPolicy.register,
        async (req, res) => {
            const { email, password } = req.body;
            try {
                const user = await AuthenticationController.register(email, password);
                res.status(201).send({ message: "User registered successfully", user });
            } catch (err) {
                res.status(400).send({ error: err.message });
            }
        }
    );
};
