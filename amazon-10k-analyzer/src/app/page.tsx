import AnalysisDashboard from "../components/AnalysisDashboard"

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Amazon 10-K Analysis (2020)</h1>
        <AnalysisDashboard />
      </div>
    </main>
  )
}