const app = require("./index")

const connect = require('./config/db')
app.listen(4000, async function(){
    await connect();
    console.log("listening to port 4000")
})