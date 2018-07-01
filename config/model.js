const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/clientes");

const clienteSchema = new Schema({
    nome: {type: String, required: true}, 
    turma: {type: String, required: true},
    tarefas: [{type: Schema.ObjectId, ref: 'Tarefa', required: true}]
});

const tarefaSchema = new Schema({
    questao: {type: String, required: true},
    isRascunho: Boolean,
    clienteID: {type: Schema.ObjectId, ref: 'Cliente', required: true}
})

const Tarefa = mongoose.model('Tarefa', tarefaSchema)
const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = {Tarefa, Cliente};
