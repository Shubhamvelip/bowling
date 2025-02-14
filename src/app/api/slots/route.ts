import { NextResponse,NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const initialSlots = [
        { id: 1, lane: 1, time: "14:00", available: true },
        { id: 2, lane: 1, time: "15:00", available: false },
        { id: 3, lane: 1, time: "16:00", available: true },
        { id: 4, lane: 2, time: "14:00", available: true },
        { id: 5, lane: 2, time: "15:00", available: true },
        { id: 6, lane: 2, time: "16:00", available: false },
        { id: 7, lane: 3, time: "14:00", available: false },
        { id: 8, lane: 3, time: "15:00", available: true },
        { id: 9, lane: 3, time: "16:00", available: true },
        // Add more slots as needed
      ]      
    try {
        return NextResponse.json(initialSlots)
    } catch (error:any) {
        return NextResponse.json({success:false,message:error.message})
    }
}