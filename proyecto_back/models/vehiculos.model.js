const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehiculosSchema = new Schema({
    marca:{type:String , required: true, max:60 },
    modelo:{type:String , required: true, max:40 },
    color:{type:String , required: true, max:40 },
    año:{type:String , required: true, max:15 },
    motor:{type:String , required: false, max:70 },
    dueño:{type:String , required: false, max:150 },
    servicio:{type:String , required: false, max:150 }
})

module.exports = mongoose.model("vehiculos", VehiculosSchema);