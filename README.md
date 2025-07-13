# 🛍️ E-Commerce Mini App (Vite + Flask + Docker)

A simple e-commerce web application built with **React (Vite)** for the frontend and **Flask** for the backend. Includes intelligent search, product favorites, viewing history, Gemini AI integration, and modern UI effects like skeleton loaders.

---

## 🧩 Tech Stack

- ⚡ **Frontend**: React 19 + Vite + TailwindCSS
- 🐍 **Backend**: Flask + Flask-CORS
- 🤖 **AI Chat**: Integrated with Gemini (Google AI) for question answering
- 🧪 **Libraries**: `axios`, `react-icons`, `react-loading-skeleton`, `react-router-dom`
- 🐳 **Containerized with Docker**

📸 UI Preview

<img width="1822" height="926" alt="Screenshot from 2025-07-14 01-53-19" src="https://github.com/user-attachments/assets/b25b9784-7dfe-4020-8bda-3e5a8072f2dd" />

Link youtube preview: https://youtu.be/V9NbxTEPsik


---

## 🚀 Getting Started

### 1. Run with Docker (Recommended)

```
docker-compose up --build
```

Frontend will run on: http://localhost:5173

Backend will run on: http://localhost:8000

###2. Run Manually (Dev Mode)
Frontend (Vite)
```
cd vite-app
npm install
npm run dev
```

Backend (Flask)
```
cd flask-server
pip install -r requirements.txt
python app.py
```

🎯 Key Features
🛒 Product Interactions

    ❤️ Mark as Favorite: Click the heart icon to toggle favorite state

    👁️ View Details: Clicking "Detail" opens a modal and marks the product as viewed

    🔍 Search by Personal Interest:

        View favorite products

        View recently viewed products

    💰 Search by Price:

        Ascending order

        Descending order

    🔥 Best Sellers: Sorted by sold quantity

🤖 Gemini AI Integration

    Type a question into the chatbot box

    Gemini will respond intelligently via the Flask backend

💎 Highlights

    🎨 Loading Skeletons: Smooth loading experience with skeleton placeholders

    📦 JSON-Based Database: Uses products.json as a lightweight data source

    🔄 Axios-Based API Calls: Centralized in GetData.js

```
    e-ecommerce/
├── vite-app/
│   ├── components/
│   ├── pages/
│   ├── layout/
│   ├── assets/
│   ├── service            # Axios API functions
│   └── App.jsx               # Routes and layout
├── flask-server/
│   ├── app.py                # Flask main entry
│   ├── service.py            # Product logic
│   ├── products.json         # Product database
│   └── chatbot.py            # Gemini AI API integration
├── docker-compose.yml
├── Dockerfile (frontend & backend)
```

🐳 Docker Support

    The entire app is containerized with Docker.

    Use docker-compose to run both backend and frontend in sync.

    Environment variables and ports are managed in docker-compose.yml.

📜 License

This project is open-source and intended for educational or personal use.


---

```
Let me know if you want me to help write the actual `Dockerfile` and `docker-compose.yml` as well!
```
