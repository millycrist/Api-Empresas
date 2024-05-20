const mongoose = require('mongoose')
require('dotenv').config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME


function main() {
    mongoose.connect(`mongodb+srv://amandarodgsc30:<password>@amanda1.msyjmlf.mongodb.net/?retryWrites=true&w=majority&appName=amanda1`)
        .then(() => console.log("Conectado ao banco Mongo"))
        .catch(error => console.log("Erro ao conectar no banco Mongo: ", error))
}

module.exports = main