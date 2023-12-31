const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
const tipos = require('../controllers/rotas/tipos')
class tipo extends Model{}
tipo.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    andamento: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    concluido: {
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'tipo'
})

sequelize.sync()
module.exports = tipo