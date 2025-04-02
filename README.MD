


# 3D Printer Dashboard 🚀

A real-time dashboard for monitoring 3D printer status, built with **FastAPI (Python)** and **HTML, CSS, JavaScript**.

## 🌟 Features
- Real-time updates every 2 seconds
- Displays:
  - **Extruder Temperature**
  - **Heater Bed Temperature**
  - **Print Progress (with progress bar)**
  - **Current Printer Status** (Idle, Printing, Completed)
- Live temperature graph using **Chart.js**
- Responsive UI for desktop and mobile

---

## 🛠️ Setup Instructions

### **1️⃣ Install FastAPI and Dependencies**

Ensure Python is installed, then run:
'''
pip install fastapi uvicorn
'''
2️⃣ Run the Backend
Start the FastAPI server:


### ** uvicorn main:app --reload

It will be available at: http://127.0.0.1:8000/status

3️⃣ Open the Frontend
Open index.html in a browser.

The dashboard will update in real-time!
