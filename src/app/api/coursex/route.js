import Course from "@/models/Course";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectDB();

        const coursex = await Course.find();
        return new NextResponse(JSON.stringify(coursex), { status: 200 });
    }
    catch (error) {
        console.log(error);
        return new NextResponse('Database Error', { status: 500 });
    }
}

