const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1/odonto')
.then(
    db=>console.log("Conexión exitosa.....")
).catch(
    err=> console.log(err)
)

/*mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/odonto', {useMongoClient: true})
var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
})

db.once('open', function(){
  console.log('Connection to DB successful')
})*/