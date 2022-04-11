FROM node:16.13.0

RUN mkdir /backend/
WORKDIR /backend/
COPY . /backend/

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]