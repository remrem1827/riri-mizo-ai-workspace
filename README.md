# riri-mizo-ai-workspace

A monorepo containing the complete riri-mizo-ai project with Next.js frontend and FastAPI backend.

## 🚀 Project Overview

This repository is organized as a monorepo containing two main applications:

- **Web Application (Next.js)** - Modern React frontend with TypeScript
- **API Backend (FastAPI)** - Python-based REST API with automatic documentation

## 📁 Repository Structure

```
riri-mizo-ai-workspace/
├── web/                    # Next.js frontend application
│   ├── app/               # App Router directory
│   ├── components/        # Reusable React components
│   ├── lib/              # Utility functions
│   └── README.md         # Frontend-specific documentation
├── api/                   # FastAPI backend application
│   ├── app/              # FastAPI application
│   ├── tests/            # API tests
│   └── README.md         # Backend-specific documentation
├── LICENSE               # MIT License
└── README.md            # This file
```

## 🛠️ Tech Stack

### Frontend (web/)
- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Backend (api/)
- **FastAPI** - Modern Python web framework
- **Python 3.11+** - Latest Python features
- **Pydantic** - Data validation using Python type annotations
- **SQLAlchemy** - Database ORM
- **Pytest** - Testing framework

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.11+
- Git

### Frontend Setup
```bash
cd web/
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Backend Setup  
```bash
cd api/
pip install -r requirements.txt
uvicorn main:app --reload
```
Open [http://localhost:8000](http://localhost:8000)

API Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)

## 📖 Documentation

- [Frontend Documentation](./web/README.md) - Next.js application setup and structure
- [Backend Documentation](./api/README.md) - FastAPI application setup and API reference

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions and support, please open an issue in this repository.
