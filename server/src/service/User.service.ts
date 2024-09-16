import { hashString } from "../helpers/hash";
import { UserModel } from "../models/User.model";

interface UserDto{
    username: string;
    email: string;
    password: string;
}

class Userservice {
    constructor(){}

    async create(user:UserDto){
        const passwordHashed = await hashString(user.password);

        user.password = passwordHashed;
        const newUser = await UserModel.create({user});
      
        return newUser;
    }

}