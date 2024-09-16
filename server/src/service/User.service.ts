import { hashString } from "../helpers/hash";
import  {UserModel}  from "../models/User.model";
import { UserDto } from "../types/user.dto";
import bcrypt from 'bcrypt'

class Userservice {
    constructor(){}

    async create(user:UserDto){
        const passwordHashed = await hashString(user.password);

        user.password = passwordHashed;
        
        const newUser = await UserModel.create(user as any);
      
        return newUser;
    }

    async getUserByEmailAndPassword(data: UserDto) {
        
        const user = await UserModel.findOne({where:{
            email: data.email
        }})

        if (!user) {
          return null;
        }
        const isPasswordValid = await bcrypt.compare(data.password, user.get('password') as string);
        if (!isPasswordValid) {
          return null;
        }
        return user;
      }

    async findOne(id:number){
        return await UserModel.findOne({where: {
            id:id
        }});
    };

}

export default new Userservice()