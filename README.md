# ✅ Verify Me - Fake Instagram Profile Detector

**Verify Me** is a smart web app that helps you detect if an Instagram profile looks suspicious, neutral, or legit — based on a set of smart metrics. Just paste the profile URL, and let the system analyze it for you.

> ⚠️ *Only Instagram public profiles are supported at the moment.*

---

## 🧠 How It Works

The app takes in an Instagram profile URL and analyzes it based on:
- Follower-to-following ratio
- Number of posts
- Presence of profile picture
- Bio and full name completeness
- Verification status vs. follower count
- Use of keywords like “official”

Then it categorizes the profile as:
- ✅ **Good**: Looks normal and trustworthy  
- ⚠️ **Neutral**: Could be incomplete or low-effort  
- 🚨 **Bad**: Suspicious AF

---

## 📁 Project Structure

verify-me/
├── backend/
│ ├── index.js # Express backend + Instagram API logic
│ ├── .env # Sensitive keys (not pushed)
│ └── package.json
│
├── fake-social-detector/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ └── package.json
│
└── README.md

---

## ⚙️ Tech Stack

### Frontend
- React + React Router
- Axios for API calls
- Custom UI with smooth animations

### Backend
- Node.js + Express
- Instagram Scraper API (via RapidAPI)
- Middleware-based data analysis logic

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- A RapidAPI account with access to the **Instagram Scraper** API

### Clone the Repo

```bash
git clone https://github.com/NilanshuGarhewal/verify-me.git
cd verify-me

🔧 Backend Setup
cd backend
npm install
Create a .env file inside backend/:

env
RAPIDAPI_KEY=your_key_here
RAPIDAPI_HOST=your_host_here

Start the backend:
node index.js

💻 Frontend Setup
cd fake-social-detector
npm install
npm start
Open http://localhost:3000 in your browser.

🧪 Testing
You can test with valid Instagram URLs, like:

https://www.instagram.com/suspect_account123/
The app will display a detailed analysis result on a result page.

📸 Screenshots (optional)
Add some cool UI screenshots here later.

🙏 Acknowledgements
RapidAPI - Instagram Scraper API

Inspiration: Fake account detection logic from Reddit + personal experiences 😎

🔒 License
This project is open-source and free to use. Add a license if needed.

🤙 Author
Made with 💙 by Nilanshu Garhewal
Stay real, stay safe — even online.








Ask ChatGPT
