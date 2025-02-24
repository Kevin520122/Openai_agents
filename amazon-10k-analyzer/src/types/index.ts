export interface QueryRequest {
    query: string
    analysisType?: string
  }
  
  export interface QueryResponse {
    response: string
    sources?: string[]
    metadata?: {
      timestamp?: string
      analysisType?: string
      [key: string]: any
    }
  }