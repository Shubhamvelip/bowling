import BowlingLanes from "@/components/BowlingLane"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Bowling Alley Availability</h1>
        <BowlingLanes />
      </div>
    </main>
  )
}

