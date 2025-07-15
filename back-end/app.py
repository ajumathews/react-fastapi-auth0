

from fastapi import Depends, FastAPI, Response, status
from fastapi.security import HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from utils import VerifyToken


app = FastAPI()

# Allow CORS for all origins (adjust as needed for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

token_auth_scheme = HTTPBearer()

@app.get("/public")
def public():
    return {"status": "public"}

@app.get("/private")
def private(response: Response, token:str = Depends(token_auth_scheme)):
    
    result = VerifyToken(token.credentials).verify()

    if(result.get("status")):
      response.status_code = status.HTTP_400_BAD_REQUEST
      return result

    return {"message": "private"}
