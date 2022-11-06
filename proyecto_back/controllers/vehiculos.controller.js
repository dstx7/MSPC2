//en esta seccion se pueden colocar todas las funciones de comandos sql
const Vehiculo = require("../models/vehiculos.model");
let response  = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let vehiculo = new Vehiculo({
        marca: req.body.marca,
        modelo: req.body.modelo,
        color: req.body.color,
        año: req.body.año,
        motor: req.body.motor,
        dueño: req.body.dueño,
        servicio: req.body.servicio

    })
    
    vehiculo.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el vehiculo."
            res.json(response)
            return;
        }
    
    response.exito = true,
    response.msg = "El vehiculo se guardo correctamente"
    res.json(response)
    })
}

exports.find = function(req,res){
    Vehiculo.find(function(err,vehiculos){
        res.json(vehiculos)
    })
}

exports.findOne = function(req,res){
    Vehiculo.findOne({_id:req.params.id}, function(err,vehiculo){
        res.json(vehiculo)
    })
}

exports.update = function(req,res){
    let vehiculo = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        color: req.body.color,
        año: req.body.año,
        motor: req.body.motor,
        dueño: req.body.dueño,
        servicio: req.body.servicio
    }

    Vehiculo.findByIdAndUpdate(req.params.id, {$set: vehiculo}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el vehiculo."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El vehiculo se modifico correctamente."
        res.json(response)
    })
}

exports.delete = function(req,res){
    Vehiculo.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el Vehiculo."
            res.json(response)
            return;
        }

        response.exito = true
        response.msg = "El Vehiculo fue fulminado con exito"
        res.json(response)
    })
}