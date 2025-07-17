from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from routes.contact import router as contact_router

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React default create-react-app port (optional)
        "http://localhost:5173",  # Vite dev server port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI backend!"}

# Include the contact router
app.include_router(contact_router)

@app.options("/{rest_of_path:path}")
async def options_handler(rest_of_path: str, request: Request):
    return Response(status_code=200)
