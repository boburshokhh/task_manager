const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
    app.post("/register", async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await AuthenticationController.register(email, password);
            res.status(201).send({ message: "User registered successfully", user });
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    });
};
