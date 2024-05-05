from langchain.chains.conversation.base import ConversationChain
# from langchain_community.llms import Ollama
from langchain_community.chat_models import ChatOllama
from langchain.prompts.prompt import PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
# from langchain.llms import HuggingFacePipeline


class Llama:
    def __init__(self):
        # self.llm = Ollama(
        #     model="llama3"
        # )
        self.llm = ChatOllama(model="llama3")

    # def interact(self):
    #     self.llm.invoke()

    def chat(self, message: str):
        template = """
        {history}
        Question: {input}
        """

        prompt = PromptTemplate(input_variables=["history", "input"], template=template)

        #need fix
        memory = ConversationBufferWindowMemory(k=5)
        llm_chain = ConversationChain(prompt=prompt, llm=self.llm, memory=memory)

        print(memory)

        result = llm_chain.run(input=message)

        # todo: convert to stream
        return result
