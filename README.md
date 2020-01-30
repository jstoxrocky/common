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
