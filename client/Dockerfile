FROM node:10

#create app directory
WORKDIR /app

#copy app source
COPY . .

#install dependencies
RUN npm install

#start app
EXPOSE 3000
CMD [ "node", "index.js" ]