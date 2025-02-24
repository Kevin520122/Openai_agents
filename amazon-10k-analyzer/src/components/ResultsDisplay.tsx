import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { QueryResponse } from '@/types/index'

interface ResultsDisplayProps {
  response: QueryResponse
}

export default function ResultsDisplay({ response }: ResultsDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
        {response.metadata?.timestamp && (
          <div className="text-sm text-gray-500">
            {new Date(response.metadata.timestamp).toLocaleString()}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{response.response}</p>
        {response.sources && response.sources.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold">Sources:</h4>
            <ul className="list-disc pl-4">
              {response.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}