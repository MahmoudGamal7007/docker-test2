FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY package-lock.json .

COPY . .

EXPOSE 9000

# CMD ./wait-for-it.sh db:3306 -t 20 -- npm start

CMD ["npm", "run", "start"]

