const mongoose = require('mongoose');
require("dotenv").config({path:"./.env"})


function connectToDataBase() {
    mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser :true,
    useUnifiedTopology: true,
}
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conect DataBase"));


}
Promise = global.Promise;
module.exports = connectToDataBase;
