#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /usr/app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
COPY ./node_modules ./

#Copy remaining files
COPY ./build/ ./

#Default command
CMD ["npm","production"]
