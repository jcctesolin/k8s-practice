FROM node:16-alpine
WORKDIR /app
COPY server.js .
RUN npm init -y && npm install express
CMD ["node", "server.js"]