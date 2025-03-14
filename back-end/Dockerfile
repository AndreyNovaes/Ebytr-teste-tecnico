FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install pm2 --save

RUN mkdir -p logs

COPY ecosystem.config.js ./
COPY . .

EXPOSE 3001

CMD ["npx", "pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
