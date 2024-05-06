import dataclasses
import json

from classy_fastapi import Routable, websocket as ws, get
from fastapi import WebSocket
from app.llama.llama import Llama


@dataclasses.dataclass
class ChatRequest:
    message: str


@dataclasses.dataclass
class ChatResponse:
    message: str


class LlamaController(Routable):
    def __init__(self):
        super().__init__()
        self.llm = Llama()

    @ws('/chat')
    async def ws(self, websocket: WebSocket):
        try:
            print("WS CONNECTION ESTABLISHED...")

            await websocket.accept()
            await websocket.send_json({"message": "What do you want to chat about?"})
            while True:
                data = await websocket.receive_text()

                human = decode_message(data)
                ai = self.llm.chat(human.message)

                await websocket.send_json({"message": ai})

        except Exception as e:
            print(e)
        print("CONNECTION DEAD...")


def decode_message(msg: str) -> ChatRequest:
    json_obj = json.loads(msg)
    instance = ChatRequest(**json_obj)
    return instance


def encode_message(msg: ChatResponse) -> str:
    return json.dumps(dataclasses.asdict(msg))
