let trim=function(){
let fun ='functionup '

console.log(fun.trim())
}

module.exports.trim=trim

let changetoLowerCase=function() {
    let fun="THIS WILL CONVERTED FROM UPPER CASE"
    console.log(fun.toLowerCase())
}
module.exports.changetoLowerCase=changetoLowerCase

let changetoUpperCase=function() {
    let fun="this is converted from lower case"
    console.log(fun.toUpperCase())
}
module.exports.changetoUpperCase=changetoUpperCase
