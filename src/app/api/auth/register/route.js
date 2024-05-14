import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (req, res, next) => {
    const { username, email, password } = await req.json();
    try {
        console.log("Recieved Data:", { username, email, password });
        await connectDB();
        const hashedPassword = bcrypt.hashSync(password, 5)
        const newUser = new User({
            name:username,
            email,
            password:  hashedPassword
        });
        await newUser.save();
        return new NextResponse(JSON.stringify(newUser), { status: 201 });
        
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify(error), { 
            status: 500,
            
        });
    }
};

