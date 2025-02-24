import { create } from 'zustand'
import { QueryResponse } from '@/types/index'

interface AgentStore {
  responses: QueryResponse[]
  addResponse: (response: QueryResponse) => void
  clearResponses: () => void
}

export const useAgentStore = create<AgentStore>((set) => ({
  responses: [],
  addResponse: (response) => 
    set((state) => ({ 
      responses: [...state.responses, response] 
    })),
  clearResponses: () => set({ responses: [] }),
}))