
from fastapi import Depends,FastAPI,Response,status
from fastapi.security import HTTPBearer
from utils import VerifyToken

app = FastAPI()
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
