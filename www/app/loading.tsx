import PlanetSpinner from "@/components/PlanetSpinner"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PlanetSpinner size={150} />
    </div>
  )
}

