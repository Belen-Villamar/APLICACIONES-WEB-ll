
FROM node:17

RUN mkdir  -p /usr/src/www

WORKDIR /usr/src/www

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]