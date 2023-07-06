FROM node:16-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

EXPOSE 3001

RUN npm install -g serve

CMD ["sh", "-c", "npm run start-backend & npx serve build"]
