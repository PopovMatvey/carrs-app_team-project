FROM python:3.8.3-alpine

WORKDIR /carrs-app_team-project

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERRED=1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/carrs-app_team-project/entrypoint.sh"]