from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import io
import base64
import requests
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")

app = FastAPI(title="RiRi API", version="0.1.0")

# CORS: allow Vercel frontend
ALLOWED_ORIGINS = [
    os.getenv("FRONTEND_ORIGIN", ""),
    os.getenv("VERCEL_URL", ""),
]
origins = []
for o in ALLOWED_ORIGINS:
    if o:
        if o.startswith("http"):
            origins.append(o)
        else:
            origins.append(f"https://{o}")
# also allow localhost for testing
origins += ["http://localhost:3000", "https://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class TTSRequest(BaseModel):
    text: str

@app.get("/health")
def health():
    return {"ok": True, "service": "riri-api"}

# Placeholder STT: returns a fake transcript for now
@app.post("/stt")
async def stt(file: UploadFile = File(...)):
    # Read the uploaded audio but don't process yet
    _ = await file.read()
    # TODO: Integrate Whisper later
    return {"transcript": "He thil hi sample transcript a ni (placeholder)."}

# Placeholder TTS: returns base64 silence WAV to prove flow
@app.post("/tts")
async def tts(req: TTSRequest):
    # TODO: Integrate XTTS/Coqui later. For now, return a small WAV beep.
    import wave, struct, math
    sample_rate = 16000
    duration_sec = 0.3
    freq = 880.0
    frames = []
    for i in range(int(sample_rate * duration_sec)):
        val = int(32767.0 * 0.2 * math.sin(2.0 * math.pi * freq * (i / sample_rate)))
        frames.append(struct.pack('<h', val))
    buf = io.BytesIO()
    with wave.open(buf, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sample_rate)
        w.writeframes(b"".join(frames))
    b64 = base64.b64encode(buf.getvalue()).decode("utf-8")
    return {"audio_base64_wav": b64}

# Placeholder Chat: echoes back with a friendly Mizo prefix
@app.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.strip()
    return {"reply": f"Ka hria ang: {msg}"}
