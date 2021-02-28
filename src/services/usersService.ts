
import  * as dbContext from "../store/dbContext";

export class UsersService {

  constructor() { }
  static async  getUsers() {
    return await dbContext.User.find()
      // .find({ price: { $gte: 10 } })
      // .find({ price: { $in: [10, 15, 20] } })
      // .or([ { price: { $in: [10, 15, 20] } }, { price: null } ])
      // .and([ { price: { $in: [10, 15, 20] } }, { price: null } ])
      // .find()
      // .sort({ name: 1 })
      //.select({ name: 1, tags: 1 })
      .limit(10);
  };
  static async getUser(id) {
    return await dbContext.User.findOne({ _id: id });
  };
  static async createUser(user) {
    user.creationDate = Date.now();
    let _user = new dbContext.User(user);
    return await _user.save();
  };
  static async updateUser(id, user) {
    user.modificationDate = Date.now();
    return await dbContext.User.updateOne({ _id: id }, user);
  };
  static async deleteUser(id) {
    return await dbContext.User.deleteOne({ _id: id });
  };
}
