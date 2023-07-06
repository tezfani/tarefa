const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
const tipos = new require('./tipo')
const usuario = new require('./usuario')

class tarefa extends Model{}
tarefa.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    data: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    arquivadas: {
        type: DataTypes.STRING(50),
        allowNull:false
    }
},{
    sequelize,
    modelName:'tarefa'
})
tipos.hasOne(tarefa)
tarefa.belongsTo(tipos)

usuario.hasMany(tarefa)
tarefa.belongsTo(usuario)

sequelize.sync()
module.exports = tarefa