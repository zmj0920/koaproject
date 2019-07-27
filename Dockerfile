FROM node:8.4

WORKDIR /app

RUN npm install -g forever

COPY ./package.json /app/

RUN npm install

COPY . /app/
 
EXPOSE 3000

CMD forever bin/www 