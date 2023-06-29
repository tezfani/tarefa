module.exports = (app)=>{
    let rota = 'usuarios'
    app.get(`/consultar/${rota}/:id?`,async(req, res)=>{
        //implementar obter dados com o sequesize
        res.send(`get ${rota}`)
    })
    app.post(`/cadastrar/${rota}`,async(req, res)=>{
        //implementar obter dados com o sequesize
        res.send(`post ${rota}`)
    })
    app.put(`/atualizar/${rota}/:id`,async(req, res)=>{
        //implementar obter dados com o sequesize
        res.send(`put ${rota}`)
    })
    app.delete(`/excluir/${rota}/:id`,async(req, res)=>{
        //implementar obter dados com o sequesize
        res.send(`delete ${rota}`)
    })
}