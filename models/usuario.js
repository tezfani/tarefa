const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
const tarefa = require('./tarefa')
const tipo = require('./tipo')
const tipos = require('../controllers/rotas/tipos')
const usuarios = require('../controllers/rotas/usuarios')
class usuario extends Model{}
usuario.init({
    nome: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    email: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    senha: {
        type: DataTypew.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'usuario'
})
sequelize.sync()
module.exports = usuario