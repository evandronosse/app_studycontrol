// este arquivo deve ser executado no terminal para que as tabelas sejam criadas
// as tabelas devem ser colocadas em ordem certa para serem criadas
// das pontas para o centro, ou seja, primeiro as tabelas que não precisa de 
// foregn key, até as que precisam 
import PermissionModel from '../api/models/permission'
import UserModel from '../api/models/user'

//lista de tabelas: aqui trazemos todos os models do app
const models = [
    PermissionModel,
    UserModel
]


async function createTable() {
    // loop que passa de tabela em tabela sincronizando com o banco de dados
    models.forEach(async model => {
        try {
            await model.sync()
        } catch (error) {
            console.log(error)
        }
    })
}

export default createTable