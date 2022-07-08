#Specify a base image
FROM node:alpine

#Add pnpm
# RUN apk add --no-cache curl \
#     && curl -sL https://unpkg.com/@pnpm/self-installer | node
# RUN npm install -g pnpm

#Specify a working directory
WORKDIR /app

#Copy the dependencies file
COPY ./package.json .

#Install dependencies
# RUN yarn install

#Copy source code files
COPY ./src ./src

#Copy config
COPY ./config ./config

#Copy enviroment
COPY production.env tsconfig.json yarn.lock ./

# Port
EXPOSE 5000

#Default command
CMD ["yarn","production"]
