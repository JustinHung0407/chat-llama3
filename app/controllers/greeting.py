from classy_fastapi import Routable, get


class GreetingController(Routable):

    @get("/greet")
    def greet(self):
        return {"message": "Hello!"}
