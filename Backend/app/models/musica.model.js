const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var d = new Date();

const Musica = new Schema({

    titulo: {
        type: String,
        required: true
    },
    autoria: {
        type: mongoose.Types.ObjectId,
        ref: 'artista',
        required: true
    },
    data: {
        type: String,
        default: d.toLocaleDateString()
    }
})

const musica = mongoose.model("musica", Musica)

