const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net/SandeepDarshanam?retryWrites=true&w=majority",{
 useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);
const middlewareGlobal=    function (req, res, next) {
    
    const ip=req.ip
    let url=req.originalUrl
    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

console.log(`${datetime},${ip},${url}`)
res.send("fuck you")
//next()
}
app.use( middlewareGlobal )

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
