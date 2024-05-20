const Departamentos = require('../models/Departamentos')

async function create(req, res) {
    const novoDepartamento = new Departamentos(req.body)
    const departamentoCriado = await novoDepartamento.save()
    res.status(201).json(departamentoCriado)
}

async function getAll(req, res) {
    res.json(await Departamentos.find())
}

async function getById(req, res) {
    const departamento = await Departamentos.findById(req.params.id)
    if (departamento) {
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}

async function update(req, res) {
    const DepartamentoAtulizado = await Departamentos.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (DepartamentoAtulizado) {
        res.json(DepartamentoAtulizado)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }

}

async function remove(req, res) {
    const DepartamentoExcluido = await Departamentos.findByIdAndDelete(req.params.id)
    if (DepartamentoExcluido) {
        res.json({
            mensagem: "Departamento excluido com sucesso!",
            DepartamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}