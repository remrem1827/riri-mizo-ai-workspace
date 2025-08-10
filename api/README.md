# API Backend (FastAPI)

This folder contains the FastAPI backend application for the riri-mizo-ai project.

## Getting Started

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the development server:
   ```bash
   uvicorn main:app --reload
   ```

3. Open [http://localhost:8000](http://localhost:8000) with your browser to see the API.
4. View interactive API documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

## Tech Stack

- FastAPI 0.104+
- Python 3.11+
- Pydantic for data validation
- SQLAlchemy for database ORM
- Alembic for database migrations
- Pytest for testing

## Project Structure

```
api/
├── app/
│   ├── __init__.py
│   ├── main.py        # FastAPI application entry point
│   ├── models/        # SQLAlchemy models
│   ├── schemas/       # Pydantic schemas
│   ├── crud/          # Database operations
│   ├── api/           # API route handlers
│   ├── core/          # Core configurations
│   └── db/            # Database configuration
├── tests/             # Test files
├── requirements.txt   # Python dependencies
└── README.md         # This file
```

## API Documentation

Once the server is running, you can access:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- OpenAPI JSON: http://localhost:8000/openapi.json
