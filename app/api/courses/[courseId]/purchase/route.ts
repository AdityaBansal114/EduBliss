import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(
    req: Request,
    {params}:{params: {courseId: string}}
) {

    try {

        const {userId} = auth();
        console.log("kdjvnqekjcfnekfjn");

        if(!userId){
            return new NextResponse("unauthorized", {status: 401});
        }

        const purchased = await db.purchase.create({
            data:{
                userId,
                courseId: params.courseId
            }
        });

        return NextResponse.json(purchased);
        
    } catch (error) {
        console.log("[PURCHASE_COURSE]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
    
}