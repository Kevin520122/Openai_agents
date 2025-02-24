# Amazon 10-K Analyzer

A modern web application that uses AI to analyze Amazon's 2020 10-K report. Built with Next.js, FastAPI, and LlamaIndex.

## Features

- 🤖 AI-powered document analysis
- 📊 Interactive query interface
- 📈 Financial metrics visualization 
- 🔍 Advanced risk assessment
- 🚀 Real-time response generation
- 📱 Responsive design

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand for state management
- Lucide Icons

### Backend
- FastAPI
- LlamaIndex
- OpenAI GPT-4
- Phoenix Arize AI for monitoring
- SQLAlchemy

## Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.11+
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/amazon-10k-analyzer.git
cd amazon-10k-analyzer
```

2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Install shadcn/ui components
npx shadcn-ui@latest init --force
npx shadcn-ui@latest add card --force

# Start development server
npm run dev
```

3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt 
#Include lama-index==0.11.6 llama-index-llms-openai llama-index-readers-file llama-index-embeddings-openai llama-index-llms-openai-like "openinference-instrumentation-llama-index>=2" arize-phoenix python-dotenv pydantic==2.6.1
sqlalchemy==2.0.27
prometheus-fastapi-instrumentator==6.1.0
redis==5.0.1
python-jose==3.3.0
fastapi==0.109.2
uvicorn==0.27.1

# Set up environment variables
cp .env.example .env
# Add your OpenAI API key to .env
#Need some credits to use OpenAI API

# Start server
uvicorn main:app --reload
```

## Project Structure

```
amazon-10k-analyzer/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── store/
│   │   ├── types/
│   │   └── lib/
│   ├── public/
│   └── package.json
└── backend/
    ├── app/
    │   ├── api/
    │   ├── core/
    │   └── db/
    ├── tests/
    └── requirements.txt
```

## Environment Variables

### Backend (.env)
```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=postgresql://user:password@localhost/dbname
REDIS_URL=redis://localhost
```

## API Endpoints

```typescript
POST /api/query
{
  "query": string,
  "analysisType"?: string
}

Response:
{
  "response": string,
  "sources"?: string[],
  "metadata"?: {
    "timestamp": string,
    "analysisType": string
  }
}
```

## Development

### Running Tests
```bash
# Frontend tests
npm test

# Backend tests
pytest
```

### Code Style
- Frontend follows TypeScript strict mode
- Backend follows PEP 8
- Prettier for JavaScript/TypeScript formatting
- Black for Python formatting

## Monitoring

The application uses Phoenix Arize AI for monitoring:
- Query performance metrics
- Response latency
- Token usage
- Error rates

Access the monitoring dashboard at `http://localhost:6006`

## Contributing

1. Fork the repository
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for GPT-4 API
- LlamaIndex for document processing
- shadcn/ui for component library
- Phoenix Arize AI for monitoring tools

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/amazon-10k-analyzer](https://github.com/yourusername/amazon-10k-analyzer)
