from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "HRMS Backend"
    API_V1_STR: str = "/api/v1"
    
    # PostgreSQL async connection string
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost/hrms"

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)

settings = Settings()
