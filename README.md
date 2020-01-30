# Common

[![CircleCI](https://circleci.com/gh/jstoxrocky/common.svg?style=svg)](https://circleci.com/gh/jstoxrocky/common)

## Description


### Backend
Python / Flask


### Frontend
Typescript / React / Material-UI / CSS-grid


## Clone
```bash
$ git clone https://github.com/jstoxrocky/common.git
```


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

#### Backend
As a backend I chose Python/Flask due to my familiarity working with those technologies. Matching the search term is pretty rudimentary and quite slow. All data is pulled into memory and then transformed to remove punctuation, make lowercase etc. Matches are then made by a literal search of the string for the query term. This could be improved upon to speed it up.

#### Frontend Testing
The frontend tests in this application are sparse. Due to the time constraints I made the decision to use Typescript in lieu of an extensive frontend testing suite for the following reasons: (1) The actual frontend logic is very sparse - there are not many methods used outside of the necessary React ecosystem. (2) Component tests are pretty brittle, they break pretty much each time a cosmetic change is made to your application. Component tests are good on a finalized application, but not so helpful during the development process. (3) 95% of errors I run into on the frontend are going to be of the flavor: `Uncaught TypeError: Cannot read property 'attribute' of undefined` and Typescript is prefectly designed to prevent such cases.

#### Improvement Areas:
Most of the below areas for improvement were made as a result of time constraints.

* String matching is slow and rough. More elegance needed here
* No loading information for the user. A spinner or loading message would be helpful
* Result display is just raw text. This could be improved with some CSS
* The autocomplete form is hacked together. More consideration needed here.
