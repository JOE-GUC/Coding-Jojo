import Courses from "@/models/Courses";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectDB();

        const course = await Courses.find();
        return new NextResponse(JSON.stringify(course), { status: 200 });
    }
    catch (error) {
        console.log(error);
        return new NextResponse('Database Error', { status: 500 });
    }
}