import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";


console.log({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
const handler = NextAuth({
  providers: [GoogleProvider({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })],
  async session({ session }) {
    const sessionUser = await User.findOne({
        email: session.user.email
    })
    session.user.id = sessionUser._id.toString()
    return session
  },
  async signIn({ profile }) {
    try{
        await connectToDB()
        // check if user exsists
        const userExsists = await User.findOne({email: profile.email})
        if(!userExsists){
            await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture
        })
    }
        // if not make new user
        return true
    } catch (err) {
        console.log(err)
        return false
    }
  },
});

export {handler as GET, handler as POST}