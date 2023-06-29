const {sequelize, Sequelize} = require('sequelize')
const schema = 'tarefa'
const sequelize = new Sequelize(
    schema, 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timezone: '-03:00'
    }
)
try {
    sequelize.authenticate()
    console.log('Conectado ao banco: '+ schema)
} catch (erro) {
    console.log('Não foi possivel conectar: ', erro)
}
module.exports = sequelize