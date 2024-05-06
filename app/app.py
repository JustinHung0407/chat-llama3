from fastapi import FastAPI

from .router import Router as BaseRouter
from fastapi.middleware.cors import CORSMiddleware


def bootstrap() -> FastAPI:
    fastapi = FastAPI()

    origins = [
        "http://127.0.0.1:8000",
        "http://127.0.0.1:3000",
        "http://localhost:3000",
        "*"
    ]

    fastapi.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    router = BaseRouter(fastapi)
    router.register_routes()

    return fastapi


app = bootstrap()
