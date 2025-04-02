from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (can be restricted)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated printer statuses
statuses = ["Idle", "Printing", "Completed"]

@app.get("/status")
def get_printer_status():
    """
    API endpoint to simulate real-time 3D printer status updates.
    """
    return {
        "extruder_temp": round(random.uniform(20, 250), 2),
        "heater_bed_temp": round(random.uniform(20, 80), 2),
        "progress": round(random.uniform(0, 100), 2),
        "status": random.choice(statuses),
    }

# Run server using:
# uvicorn main:app --reload
