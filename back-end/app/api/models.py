from pydantic import BaseModel
from typing import Optional, List, Dict

class QueryRequest(BaseModel):
    query: str
    analysis_type: Optional[str] = "general"

class QueryResponse(BaseModel):
    response: str
    sources: Optional[List[Dict]] = []
    metadata: Optional[Dict] = {}