FROM node:12.18.1

WORKDIR /

COPY ["package.json", "package-lock.json*", "./app/.dist/"]

RUN npm install

CMD ["npm", "start"]