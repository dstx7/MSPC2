// documento para el enrutador usado express
const express = require("express")
const router = express.Router()
const vehiculosController = require("../controllers/vehiculos.controller")

router.post("/",vehiculosController.create)
router.get("/",vehiculosController.find)
router.get("/:id",vehiculosController.findOne)
router.put("/:id",vehiculosController.update)
router.delete("/:id",vehiculosController.delete)


module.exports = router