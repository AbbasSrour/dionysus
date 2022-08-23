FROM node:alpine AS build

LABEL org.opencontainers.image.vendor=dionysus-apollo
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json","./"]

RUN ["pnpm", "install"]

COPY ["src", "prisma/client","tsconfig.json","tsconfig.build.json","./"]

RUN ["pnpm","build"]

FROM node:alpine

LABEL org.opencontainers.image.vendor=dionysus-apollo
LABEL org.opencontainers.image.tile="Dionysus Apollo Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", "./"]

COPY [".env", "./.env"]

RUN ["pnpm", "install", "--only=production"]

COPY --from=build /usr/share/app/build ./build

ENV NODE_ENV=development

EXPOSE 4001/tcp

ENTRYPOINT ["node", "build/src/index.js"]
