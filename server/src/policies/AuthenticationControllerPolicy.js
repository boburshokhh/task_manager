const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ).required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            switch (error.details[0].context.key) {
                case "email":
                    res.status(400).send({
                        error: "Email qiymatini to'g'ri kiriting",
                    });
                    break;
                case "password":
                    res.status(400).send({
                        error: `
                            Parol faqat harflar va raqamlardan iborat bo'lib,
                            8 tadan 32 tagacha uzunlikda bo'lishi kerak.
                        `,
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "Registratsiya ma'lumotlari xato.",
                    });
            }
        } else {
            next();
        }
    },
};
