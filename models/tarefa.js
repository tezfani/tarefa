const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
const tarefas = require('../controllers/rotas/tarefas')
const tipos = require('../controllers/rotas/tipos')
const usuarios = require('../controllers/rotas/usuarios')
class tarefa extends Model{}
tarefa.init({
    nome: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    data: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    arquivadas: {
        type: DataTypew.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'tarefa'
})
tipo.hasOne(tarefa)
tarefa.belongsTo(tipos)

usuario.hasMany(tarefa)
tarefa.belongsTo(usuarios)

sequelize.sync()
module.exports = tarefa