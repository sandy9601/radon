const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weather=require("../controllers/Weather")
const meme=require("../controllers/meme")


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/districId",CowinController.getDistrictsById)

router.get("/cowin/calendarByDistrict",CowinController.calendarByDistrict)

router.get("/Weather",weather.getWeather)

router.get("/cities",weather.cities)

router.post("/meme",meme.meme)







// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;