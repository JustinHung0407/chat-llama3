from fastapi import FastAPI

from .router import Router as BaseRouter


def bootstrap() -> FastAPI:
    fastapi = FastAPI()
    router = BaseRouter(fastapi)
    router.register_routes()

    return fastapi


app = bootstrap()
