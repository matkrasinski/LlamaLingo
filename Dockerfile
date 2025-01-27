FROM node:23-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 3000