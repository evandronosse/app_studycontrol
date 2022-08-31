import Sequelize from 'sequelize'
import config from 'config'

// criação de uma instancia de conexão do banco de dados
const instance = new Sequelize(
    //nome do banco de dados
    config.get('database.database'),
    // nome do usuario do banco
    config.get('database.username'),
    // senha
    config.get('database.password'), {
    // host: 127.0.0.1
    host: config.get('database.host'),
    // dialeto: mysql
    dialect: config.get('database.dialect'),
    // transforma a resposta do banco de dados em objeto puro
    query: { raw: true },
    // evita que cada requisição no banco mostre informações no console
    logging: false
}
);
export default instance