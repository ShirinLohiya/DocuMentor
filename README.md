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
MIT License

Copyright (c) 2025 Noor Nabeela K, Ranjith Singh,
Shirin Lohiya, Tejaswini P D, Ayesha Parveen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


# 🙌 Acknowledgements
Google Generative AI

React

speech_recognition

pyttsx3

Wikipedia API

Built with ❤️ by Team docuMentor @ Intceptrix Hackathon 2025



---




