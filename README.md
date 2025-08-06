# QR Code Generator 🚀

A full-stack QR Code Generator web application built with **Node.js**, **Express**, and **HTML/CSS/JS**.

---

## 🚀 Features

This app allows users to:

- 🔗 Generate QR codes for any URL  
- 📥 Download QR codes as PNG files  
- ✉️ Send contact messages via email using **Web3Forms**  
- 🌗 Toggle between **Light/Dark mode**  

---

## 🔗 Live Demo

👉 [View Live on Render](https://generate-qr-code-2e8m.onrender.com)

---

## 📂 Project Structure
QR-Code-Generator/
├── public/ # Frontend (HTML, CSS, JS)
│ ├── assets/ # Icons and media
│ ├── style.css # Styling
│ └── script.js # Frontend JS logic
├── generated_qr/ # Stores generated PNG QR codes (auto-created)
├── .env # Environment variables (e.g., Web3Forms key)
├── .gitignore # Ignores node_modules, .env, etc.
├── package.json # Node dependencies
└── server.js # Express backend


---

## 🛠️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) & npm
- [Git](https://git-scm.com/)

### Steps
git clone https://github.com/alok9064/QR-Code-Generator.git
cd QR-Code-Generator
npm install
---

🚀 Run the App Locally
node server.js
Visit 👉 http://localhost:3000


🛡️ Deployment
This project is deployed on Render
To Deploy:
1.Log in to Render with your GitHub account
2.Click "New Web Service"
3.Select your repo: QR-Code-Generator
4.Use these settings:

Build Command:
npm install

Start Command:
node server.js

Environment:
Node

Root Directory: (leave blank unless your server is in a subfolder)
Ensure the generated_qr/ folder is tracked using a .gitkeep file
Click Deploy


📬 Contact Form Integration
Using Web3Forms, this app securely handles form submissions via API using an access key.

🔐 Don't worry — Web3Forms keys are public-safe!


🤝 Contributing
Contributions are welcome! Feel free to fork this repo, make changes, and submit a pull request.


🧑‍💻 Author
Tanmoy Paul
GitHub Profile


📄 License
This project is licensed under the MIT License


Thank you for visiting and using the QR Code Generator!
