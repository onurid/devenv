

FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y git

RUN mkdir -p /conf
RUN mkdir -p /app
WORKDIR /app

ENTRYPOINT  ["git", "clone", "https://github.com/osmanonuryasar/backoffice.git"]




