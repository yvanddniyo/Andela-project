import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email:{type: String, require: true},
    authentication: {
        password: {type: String, require: true, select: false},
        salt:  {type: String, require: true},
        sessionToken: {type: String, require: true}
    }
},
{
  timestamps: true
})

export const  userModel =   mongoose.model("User", userSchema)

// export some functions

export const getUser = () => userModel.find();
export const getUserByEmail = (email: string) => userModel.findOne({email})
export const getUserBysessionToken = (sessionToken: string) => userModel.findOne({
    'authentication.sessionToken': sessionToken,
})
export const getUserById = (id: string) => userModel.findById(id)
export const createUser = (values: Record<string, any>) => new userModel(values)
.save().then((user) => user.toObject())
export const deleteUser = (id: string) => userModel.findByIdAndDelete({_id: id})
export const updateUser = (id: string, values: Record<string, any>) => userModel.findByIdAndUpdate(id, values)