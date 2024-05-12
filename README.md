# Chat llama3

This is a demo project for combining different LLMs for chatbot.

## Setup and Installation

- Setup virtual environment and install setuptools
    ```shell
    python -m venv .venv
    # activate virtual environment
    source .venv/bin/activate
    pip install setuptools
    ```
    
- Install dependencies
    ```shell
    pip install -r requirements.txt
    python setup.py install
    ```

- leave virtual environment
    ```shell
    deactivate
    ```

## Start the server

- Start the server
  - Using Python
      ```shell
      python main.py
      ```
  - Using uvicorn
      ```shell
      uvicorn main:app --reload
      ```

## Freeze dependencies

1. Freeze dependencies
    ```shell
    mv requirements.txt requirements.txt.bak
    pip freeze > requirements.txt
    ```
2. Install dependencies from requirements.txt
    ```shell
    pip install -r requirements.txt
    ```



websocat -v -v ws://127.0.0.1:8888/chat
