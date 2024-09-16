import { hashString } from "../helpers/hash";
import  {UserModel}  from "../models/User.model";
import { UserDto } from "../types/user.dto";

class Userservice {
    constructor(){}

    async create(user:UserDto){
        const passwordHashed = await hashString(user.password);

        user.password = passwordHashed;
        
        const newUser = await UserModel.create(user as any);
      
        return newUser;
    }

    async findOne(id:number){
        return await UserModel.findOne({where: {
            id:id
        }});
    };

}

export default new Userservice()