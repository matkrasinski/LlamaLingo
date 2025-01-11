# Base image
FROM mcr.microsoft.com/devcontainers/javascript-node:18

WORKDIR /workspace

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
