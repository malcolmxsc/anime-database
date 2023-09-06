const mongoose = require('mongoose');

const favoriteListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  animeList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Anime', // Reference to the Anime model
    },
  ],
});

const FavoriteList = mongoose.model('FavoriteList', favoriteListSchema);

module.exports = FavoriteList;