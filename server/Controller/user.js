import user from "../Model/user.js"


export const registeruser = async(req , res)=>{

    const {username , email , password}= req.body

    const existingemail = await user.findOne({email})
    const username1 = await user.findOne({username})

    if(existingemail) return res.status(400).json({message: "user already exist"})
    if(username1) return res.status(400).json({message: "username already exist"})

    const newuser = new user(req.body)
    try {
        const users = await newuser.save()
        const {password , ...other}= users._doc
        res.status(200).json({
            message:"success",
            data: {...other}
        })
    } catch (error) {
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(400).json({ message: "Email must be unique" });
        }
        res.status(500).json(error)
    }

}


export const loginuser = async(req,res)=>{

    const {email , password}= req.body

    try {
        const checkuser = await user.findOne({email})

        if(!checkuser) return res.status(400).json({
            message:"invalid credential"
        })
        if(checkuser.password !=req.body.password ) return res.status(400).json({
            message:"invalid credential"
        })
        const {password , ...other}= checkuser._doc
        res.status(200).json({
            message:"success",
            data:{...other}
        })
    } catch (error) {
        res.status(500).json(error)
    }
   

    
}