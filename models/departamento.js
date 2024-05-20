const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Departamentos = mongoose.model('departamento', schema)

module.exports = Departamentos