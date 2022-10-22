const express = require('express');
const movie_mocks_db = require('./../assets/movie_mocks');
const router = express.Router();

// Get all movies
router.get('/', async (req,res) => {
    try{
        const result = await movie_mocks_db.find();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

// Get movies by genre
router.get('/:genre', async (req,res) => {
    try{
        const result = await movie_mocks_db.findByGenre(req.params.genre);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router