from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime
from pathlib import Path
import json

app = FastAPI()

# CORS middleware - allows your React app to talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

class ContactForm(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str | None = None
    message: str | None = None

@router.post("/contact")
async def submit_contact(form: ContactForm):
    data = form.model_dump()
    data["timestamp"] = datetime.utcnow().isoformat()

    # Save to JSON file
    data_file = Path("messages.json")
    if data_file.exists():
        with data_file.open("r") as f:
            messages = json.load(f)
    else:
        messages = []

    messages.append(data)
    with data_file.open("w") as f:
        json.dump(messages, f, indent=2)

    # Console log
    print("📩 Contact form submitted:")
    for key, value in data.items():
        print(f"{key}: {value}")

    return {
        "status": "success",
        "message": "Contact form received and saved!",
        "data": data
    }

# Register the router (no prefix, /contact is the endpoint)
app.include_router(router)

# Root route
@app.get("/")
async def root():
    return {"message": "FastAPI backend is up and running!"}
