"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import axios from "axios"

export interface SlotFace {
  id: number
  lane: number
  time: string
  available: boolean
}

export default function BowlingLanes() {
  const [slots, setSlots] = useState<SlotFace[]>([])

  useEffect(() => {
    getSlots()
  }, []) // Runs only on mount

  const getSlots = async () => {
    try {
      const response = await axios.get("/api/slots")
      setSlots(response.data) // Ensure data is correctly extracted
    } catch (error) {
      console.error("Error fetching slots:", error)
    }
  }

  const toggleAvailability = (id: number) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id ? { ...slot, available: !slot.available } : slot
      )
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`p-4 rounded-lg shadow-md ${
            slot.available ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Lane {slot.lane}</span>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                slot.available
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {slot.available ? "Available" : "Booked"}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{slot.time}</span>
          </div>
          <button
            onClick={() => toggleAvailability(slot.id)}
            className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium ${
              slot.available ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!slot.available}
          >
            {slot.available ? "Book Now" : "Unavailable"}
          </button>
        </div>
      ))}
    </div>
  )
}
