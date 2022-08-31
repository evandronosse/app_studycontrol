import UserRepositories from "../repositories/user"

//AQUI FICA NOSSAS REGRAS DE NEGOCIO (USE CASE)

class User {
    //quando criamos um objeto precisamos travar a variavel
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.phone = user.phone;
        this.address = user.address;
        this.cities_id = user.cities_id;
        this.levels_id = user.levels_id;
        this.permission = user.permission;
        this.data = user.data;
        this.password = user.password;
        this.email = user.email;
        this.church_id = user.church_id;
    }
    static async list() {
        const userList = await UserRepositories.list()
        return userList;
    }
    async create() {
        if (this.email == await User.searchEmail(this.email)) {
            console.log("Usuario ja cadastrado");
        }
        return UserRepositories.create(this);
    }
    static async searchEmail() {
    }
    async update() {
        await UserRepositories.update(this, this.id)
    }
    static async show(id) {
        const user = await UserRepositories.show(id)
        return user
    }
}
export default User;