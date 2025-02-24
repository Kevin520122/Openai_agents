from fastapi import APIRouter, HTTPException
from datetime import datetime
from app.core.agent import get_agent
from .models import QueryRequest, QueryResponse

router = APIRouter()

@router.post("/query", response_model=QueryResponse)
async def process_query(request: QueryRequest):
    try:
        agent = get_agent()
        response = agent.chat(request.query)
        
        return QueryResponse(
            response=str(response),
            metadata={
                "analysis_type": request.analysis_type,
                "timestamp": datetime.now().isoformat()
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))