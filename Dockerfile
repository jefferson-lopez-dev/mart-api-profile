FROM node:18-bullseye

WORKDIR /api-mart-profile

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]