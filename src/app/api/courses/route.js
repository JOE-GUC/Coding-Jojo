import courses from "../../models/courses";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectDB();

        const course = await courses.find();
        return new NextResponse(JSON.stringify(course), { status: 200 });
    }
    catch (error) {
        console.log(error);
        return new NextResponse('Database Error', { status: 500 });
    }
}