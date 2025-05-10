# 🧠 docuMentor – Voice-Powered Document Assistant

docuMentor is a smart voice assistant that helps users interact with documents (like PDFs) and online content (e.g., Wikipedia) using natural language. Built during a hackathon, it combines speech recognition, AI, and voice output in one seamless workflow.

## 🚀 Features

- 🎙️ **Speech-to-Text**: Speak your questions directly.
- 🧠 **AI-Powered Responses**: Uses Gemini AI to understand and respond.
- 📄 **Document Summarization**: Extract and summarize content from PDF files.
- 🌐 **Wikipedia Search**: Get spoken summaries from Wikipedia entries.
- 🔊 **Text-to-Speech**: Listens and speaks back responses.
- 💻 **Minimal UI**: Clean ChatGPT-like React frontend.

---

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- Axios  

**Backend**  
- Python  
- Flask  
- Gemini AI (`google.generativeai`)  
- PyPDF2  
- Wikipedia API  
- `speech_recognition`  
- `pyttsx3`  

---

---

## 🧪 Installation & Running Locally

### 🔧 Backend (Python)

```bash
cd server
pip install -r requirements.txt
python app.py
```
💻 Frontend (React)
```
bash
cd client
npm install
npm run dev
 ```
Make sure both servers are running. The React app will call the backend APIs to process your voice or PDF input.

# 📚 How It Works
🎤 User speaks into the mic.

🧠 Voice is transcribed and sent to the backend.

📄 If it’s a PDF or Wiki request, data is fetched and processed.

🧠 Gemini AI generates the response.

🔊 The assistant speaks the response back.

# ⏳ Hackathon Origin
This project was built in under 24 hours as a functional MVP during a college hackathon.

The goal was to build an assistant that integrates AI with voice interaction for real-time document understanding.

# 🧩 Challenges Faced
Real-time voice handling with React & Python

Synchronizing speech recognition and Gemini output

Deploying AI inference within time constraints

# 📈 Future Enhancements
Upload and summarize multiple file types (docx, txt)

Memory-based conversation flow

Better UI for interaction history

Dockerization & deployment

# 📄 License
This project is open-source under the MIT License.

# 🙌 Acknowledgements
Google Generative AI

React

speech_recognition

pyttsx3

Wikipedia API

Built with ❤️ by Team docuMentor @ Intceptrix Hackathon 2025



---




