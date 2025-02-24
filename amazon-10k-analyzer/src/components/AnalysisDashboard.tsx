'use client'

import { useState } from 'react'
import QueryInput from './QueryInput'
import ResultsDisplay from './ResultsDisplay'
import { useAgentStore } from '@/store/agent-store'
import { Card } from './ui/card'

export default function AnalysisDashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const { responses, addResponse } = useAgentStore()

  const handleQuery = async (query: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:8000/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      
      if (!response.ok) {
        throw new Error('Query failed')
      }

      const data = await response.json()
      addResponse(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <QueryInput onSubmit={handleQuery} isLoading={isLoading} />
      
      <div className="space-y-4">
        {responses.map((response, index) => (
          <ResultsDisplay key={index} response={response} />
        ))}
      </div>
    </div>
  )
}