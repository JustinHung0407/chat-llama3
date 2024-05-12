# Install python





## For macOS (Apple Silicon)

There is some python3 installed by default in Mac OS X.
But using system python is not recommended for development and 
hard to manage versions depends on the project.

Also, using homebrew python is not recommended 
due to some application installed from homebrew needs certain python version.

Therefore, it is recommended to use `pyenv` to manage python versions.

- Python for system: `/usr/bin/python3`
- Python for homebrew: `/opt/homebrew/bin/python3`
- Python for development: `pyenv`

### Install pyenv

- Install pyenv using homebrew
    ```bash
    brew install pyenv
    ```

- setup PATH
    ```shell
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
    echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
    echo 'eval "$(pyenv init -)"' >> ~/.zshrc
    ```

- install python using pyenv
  ```shell
  pyenv install 3.12.2
  ```

- set global python version
  ```shell
  pyenv global 3.12.2
  ```

- check python version
  ```shell
  pyenv version
  ```

- check all installed python versions
  ```shell
  pyenv versions
  ```