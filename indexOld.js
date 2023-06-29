const express = require('express')
const app = express()
const usuario = new require('./models/usuario')
const pet = new require('./models/tipo')
const doacao = new require('./models/tarefa')

var porta = '3200'

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res)=>res.send('Gerenciamento de Tarefas'))
app.post(`/cadastrar/${rota}`, async (req, res)=>{
    let dados = req.body
    let respBd = await usuario.create(dados)
    res.json(respBd)
})

app.get(`/consultar/${rota}/:id?`, async (req, res)=>{
    let dados = req.params.id? await usuario.findOne({where:{id:req.params.id}}) : await usuario.findAll()
    res.json(dados)
})
app.put(`/atualizar/${rota}/:id`, async (req, res) => {
    let id = req.params.id
    let dados = req.body
    let respBd = await usuario.update(dados, {where:{id:id}})
    res.json(respBd)
})
app.delete(`/excluir/${rota}/:id`, async (req, res) => {
    let id = req.params.id
    let respBd = await usuario.destroy({where:{id:id}})
    res.json(respBd)
})
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))


