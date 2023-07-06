const auth = require("../auth")

const model = new require('../../models/usuario')
const rota = 'usuarios'
module.exports = (app)=>{
    app.post(`/cadastrar/${rota}`, async (req, res)=>{
        let dados = req.body
        let respBd = await model.create(dados)
        res.json(respBd)
    })
    
    app.get(`/consultar/${rota}`, auth.validarToken, async (req, res)=>{
        let dados = await model.findOne({where:{id:req.usuarioAtual.id}})
        res.json(dados)
    })
    app.put(`/atualizar/${rota}`, auth.validarToken, async (req, res) => {
        let id = req.usuarioAtual.id
        let {nome, cpf, telefone, whatsapp} = req.body
        let dados = {nome, cpf, telefone, whatsapp}
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })
    app.delete(`/excluir/${rota}`, auth.validarToken, async (req, res) => {
        let id = req.usuarioAtual.id
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
} 