const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
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
sequelize.sync()
module.exports = tarefa