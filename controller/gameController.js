const game = require("../model/gameModel");

exports.Game = async (req, res) => {
    try {
        let newGame = await game.find();

        res.status(200).json({
            status: "success",
            newGame,
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something Went Wrong"
        })
    }
}