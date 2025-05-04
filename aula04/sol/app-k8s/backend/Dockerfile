FROM node:16-alpine
WORKDIR /app
COPY server.js .
RUN npm init -y && npm install express cors
RUN apk add curl
CMD ["node", "server.js"]