from pydantic_settings import BaseSettings # type: ignore

class Settings(BaseSettings):
    OPENAI_API_KEY: str
    # DATABASE_URL: str
    # REDIS_URL: str
    
    class Config:
        env_file = ".env"

settings = Settings()