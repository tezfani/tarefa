const model = new require('../../models/usuario')
const auth = require('../auth')
const validacao = require('../validacao')
module.exports = (app)=>{
    app.post(`/login`, async (req, res)=>{
        try{
            let dados = req.boby
            let validaLogin = await validacao.validarLogin(dados, model)
            if(validaLogin.autenticado)
            {let {id, nome, email} = validaLogin.usuario.dataValues
                dados = {id, nome, email}
                let token =await auth.gerarToken(dados)
                return res.json({dados, token:token}).status(200)
            } else {
                return res.json(validaLogin).status(200)
            }
        } catch (error) {
            return res.json(error).status(400)
        }
    })

    app.get('/testeAuth', auth.validarToken, async(req, res)=>{
        const usuarioAtual = req.usuarioAtual
        const token = req.token
        res.json({usuarioAtual, token})
    })

}