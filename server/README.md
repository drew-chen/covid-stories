# Back-end

## Build Setup

If you're using windows, WSL is recommended.

```bash
# create virtual environnement in ./server
$ python3 -m venv venv

# activate virtual environment
$ source ./venv/bin/activate

# install dependencies
$ pip install -r ./requirements.txt

# run
$ export FLASK_APP=app/app.py
$ flask run

# note: to leave the activate virtual environment
$ deactivate
```
