import { NextResponse,NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        return NextResponse.json({success:true,message:"data received",data:data})
    } catch (error:any) {
        return NextResponse.json({success:false,message:error.message})
    }
}