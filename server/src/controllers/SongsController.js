const {Song} = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10,
                order: [['createdAt', 'DESC']]  // Сортировка по дате создания
            });
            res.send({
                data: songs,
                meta: {
                    count: songs.length,
                    limit: 10
                }
            });
        } catch (err) {
            res.status(500).send({
                error: "Error fetching songs",
                message: err.message
            });
        }
    },
    async post(req, res) {
        try {
            if (!req.body.title || !req.body.artist) {
                return res.status(400).send({
                    error: "Title and artist are required fields"
                });
            }
            const songInfo = req.body
            const song = await Song.create(songInfo);
            res.send({
                data: song
            });
        } catch (err) {
            res.status(500).send({
                error: "Error creating song",
                message: err.message
            });
        }
    }
};
