import UserModel from '../models/users';

class User {
    list() {
        return UserModel.findAll()
    }
    async showEmail(email) {
        const result = await UserModel.findOne({
            where: {
                email: email
            }
        })
        return result
    }
    async showId(id){
        const result = await UserModel.findOne({
            where: {
                id: id
            }
        })
        return result
    }
    create(data) {
        return UserModel.create(data)

    }
    update(data, id) {
        return UserModel.update(data, {
            where: {
                id: id,
            }
        })
    }
   async show(id){
        const result = await UserModel.findOne({
            where: {
                id: id
            }
        })
        return result
    }
}
export default new User();