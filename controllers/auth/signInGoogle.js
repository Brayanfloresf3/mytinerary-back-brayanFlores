import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        console.log(req);

        return res.redirect(`https://5173-idx-mytinerarybrayanfloresgit-1732026142472.cluster-fnjdffmttjhy2qqdugh3yehhs2.cloudworkstations.dev/?token=${req.token}`)
        
    } catch (error) {
       next(error) 
    }
}