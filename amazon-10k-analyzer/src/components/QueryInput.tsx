'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface QueryInputProps {
  onSubmit: (query: string) => void
  isLoading?: boolean
}

export default function QueryInput({ onSubmit, isLoading = false }: QueryInputProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query.trim())
      setQuery('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about Amazon's 2020 performance..."
          className="flex-1 p-2 border rounded-md"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 flex items-center gap-2"
        >
          <Search className="w-4 h-4" />
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  )
}