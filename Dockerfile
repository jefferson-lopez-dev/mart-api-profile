FROM node:18-bullseye

WORKDIR /api-mart-auth

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]