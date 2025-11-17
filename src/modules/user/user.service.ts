import { Injectable } from "@nestjs/common";
import { IUser } from "src/shared-helpers";



@Injectable()
export class UserService {
    constructor(){}


    allUsers():IUser[]{
        return [{id:2, username:"ukug" , email:"tfuygs" , password:"53337848"}]
    }
}