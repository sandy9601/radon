let axios = require("axios")



let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        let tempdata=result.data
        let temp=tempdata.main.temp
        res.status(200).send({msg:true,temperature:temp})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let cities=async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityarray=[]
    for(i=0; i<cities.length; i++){
    let obj={city:cities[i]}
    let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fdf7ba3c67b6828f9c0822228ac6d85d`)
    obj.temp=resp.data.main.temp
    cityarray.push(obj)
        }
        console.log(cityarray)
       let sorted=cityarray.sort( function(a,b){return a.temp-b.temp} )
        res.status(200).send({status:true,data:sorted})
}
catch(err){
    return res.status(500).send({stayus:false,error:err.message})
}}





//["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

module.exports.getWeather=getWeather
module.exports.cities=cities
