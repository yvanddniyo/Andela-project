import express  from "express";
import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers/index";

export const login = async (req: express.Request, res: express.Response) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400)
    }

    const existingUser = getUserByEmail(email)
    if(!existingUser) {
        return res.status(400).json("you are already user. log in please")
    } 
 }

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.sendStatus(400)
        }
        const existingEmail = await getUserByEmail(email)
        if(existingEmail) {
            return res.status(400).json("user already existing")
        }

        const salt = random()
        const user = createUser({
            username, 
            email,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        })
        return res.status(200).json({user:"Account succussfully created."}).end()
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}
