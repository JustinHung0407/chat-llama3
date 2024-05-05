from typing import Type

from classy_fastapi import Routable
from fastapi import FastAPI

from app.controllers.greeting import GreetingController
from app.controllers.llama import LlamaController


class Router:
    controllers: list[Type[Routable]] = [
        GreetingController,
        LlamaController
    ]

    def __init__(self, fastapi: FastAPI):
        self.fastapi = fastapi

    def register_routes(self):
        for controller in self.controllers:
            instance = controller()
            self.fastapi.include_router(instance.router)
