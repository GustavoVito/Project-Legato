const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Comentarios = new Schema({
    id_comentario:{
        type: Number,
        required: true
    },
    autor: {
        type: String, 
        required: true,
    },
    conteudo:{
        type:String,
        required:true
    },
    data_criacao:{
        type: Date,
        required:true
    },
  
})

const comentarios = mongoose.model("comentarios", Comentarios)