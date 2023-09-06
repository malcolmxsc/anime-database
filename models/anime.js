

const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  synopsis: {
    type: String,
  },

  duration: {
    type: String,

  },
  season: {
    type: String,

  },
  aired: {
    type: String,
  },
  
  rank: {
    type: Number
  },

  score: {
    type: Number
  },
  popularity: {
    type: Number
  },
  rating: {
    type: String,
  },
  episodes: {
    type: Number,

  }
       
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;