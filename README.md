Common Web Application


## Run
### Docker
```bash
$ # Make sure you have Docker installed
$ docker build -t common . 
$ docker run -p 5000:5000 common
$ # Navigate to http://0.0.0.0:5000 in your browser
$ # Site will be unreliable if you navigated 127.0.0.1:5000 or localhost:5000
```

## Run
### Without Docker
```bash
$ # OPTIONAL: Setup a virtualenv: https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html
$ pip install -r requirements.txt
$ python setup.py install
$ FLASK_APP=common/application.py FLASK_ENV=development flask run
$ # Navigate to http://0.0.0.0:5000 in your browser.
$ # Site will be unreliable if you navigated 127.0.0.1:5000 or localhost:5000
```