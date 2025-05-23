
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from src.routes.users import router as user_router
from src.routes.teams import router as team_router
from src.routes.auth import router as auth_router
from src.routes.askai import router as askai_router
from src.routes.chat import router as chat_router
from src.core.security import JWTAuth
from starlette.middleware.authentication import AuthenticationMiddleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # a remplacer
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(askai_router)
app.include_router(team_router)
app.include_router(auth_router)
app.include_router(chat_router)
app.add_middleware(AuthenticationMiddleware, backend=JWTAuth())


@app.get('/')
def Checking():
    return JSONResponse(content={"status":"Running !"})
