const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    easy: {
        word: {
            type: String
        }
    },
    medium: {
        word: {
            type: String
        }
    },
    hard: {
        word: {
            type: String
        }
    }
});

const game = mongoose.model("Game", GameSchema);
module.exports = game;