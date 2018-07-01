const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Schema = mongoose.Schema
const server = express()
const model= require("./config/model")
const Cliente = model.Cliente
const Tarefa = model.Tarefa

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(express.static(__dirname + '/public'))

server.get('/clientes', function(req, res) {
    var Query = Cliente.find();
    Query.select("-pedidos");  //para excluir os pedidos (desnecessário carregar pedidos para todos os clientes)
    Query.exec(function(err, clientes) {
        res.send(clientes);
    })
})

server.get('/clientes/:id', function(req, res) {
    Cliente.findOne({_id: req.params.id}, function(err, cliente){
        res.send(cliente)
    })
})

server.post('/clientes', function(req, res) {
    var cliente = new Cliente(req.body)
    cliente.save(() => res.sendStatus(200))
    
})

server.put('/clientes/:id', function(req, res) {
    var cliente = req.body;
    Cliente.update({_id: req.params.id}, cliente, (err, raw) => {
        res.sendStatus(200)
    })
})

server.delete('/clientes/:id', function(req, res) {
    Cliente.remove({_id: req.params.id}, () => {
        res.sendStatus(200)
    })
})


//Tarefas
server.get('/tarefas', function(req, res) {
        Tarefa.find(function(err, tarefas){
        console.log(tarefas)
        res.send(tarefas)
    })
})

server.get('/tarefas/:id', function(req, res) {
    // console.log(req.params._id)
    Tarefa.findOne({_id: req.params.id}, function(err, tarefa){
        res.send(tarefa)
    })
})

server.post('/tarefas', function(req, res) {
    var tarefa = new Tarefa(req.body)
    tarefa.save(() => res.sendStatus(200))

})

server.put('/tarefas/:id', function(req, res) {
    var tarefa = req.body;
    Tarefa.update({_id: req.params.id}, tarefa, (err, raw) => {
        res.sendStatus(200)
    })
})

server.delete('/tarefas/:id', function(req, res) {
    Tarefa.remove({_id: req.params.id}, () => {
        res.sendStatus(200)
    })
})

server.listen(process.env.PORT || 8000, function() {
    console.log('Executando trabalhoWEB')
})