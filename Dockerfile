FROM python:3.7-alpine
WORKDIR /common
ENV FLASK_APP common/application.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_ENV=production
RUN apk update && apk upgrade && \
    apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY setup.py setup.py
RUN python setup.py install
COPY . .
CMD ["flask", "run"]
