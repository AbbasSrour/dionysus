FROM node:alpine AS build

LABEL org.opencontainers.image.vendor=dionysus-api
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json", "prisma", "tsconfig.json","./"]

RUN ["pnpm", "install"]

COPY ["src", "tsconfig.json","./"]

RUN ["pnpm","build"]

FROM node:alpine

LABEL org.opencontainers.image.vendor=dionysus-api
LABEL org.opencontainers.image.tile="Dionysus Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", "./"]

COPY [".env", "./.env"]

#RUN ["pnpm", "install", "--only=production"]
COPY --from=build /usr/share/app/node_modules ./node_modules

COPY --from=build /usr/share/app/build ./build

ENV NODE_ENV=staging

EXPOSE 4000/tcp

ENTRYPOINT ["node", "build/src/index.js"]
