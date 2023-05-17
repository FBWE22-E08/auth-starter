import { StatusCodes } from "http-status-codes";
import User from "../models/User.js"

/**
 * Controller method to get a list of users from the users collection.
 * @param {*} req 
 * @param {*} res 
 */
export const listUsers = async(req, res) => {
   try {
     const users = await User.find();
     return res.status(StatusCodes.OK).json(users);
   } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()})
   }
}


/**
 * Controller method to insert a new user into the users collection
 * @param {*} req 
 * @param {*} res 
 */
export const createUser = async(req, res) => {
   try {
     const createdUser = await User.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        userName:req.body.userName,
        email:req.body.email
     });

     return res.status(StatusCodes.OK).json({message:'User Created', createdUser})
   } catch (error) {
     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()})
   }
}

export default {createUser}