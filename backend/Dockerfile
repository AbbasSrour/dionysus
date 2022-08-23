FROM node:alpine AS build

LABEL org.opencontainers.image.vendor=dionysus-hercules
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json","./"]

RUN ["pnpm","install"]

COPY ["src","prisma","tsconfig.json","./"]

RUN ["pnpm","build"]

FROM node:alpine

LABEL org.opencontainers.image.vendor=dionysus-hercules
LABEL org.opencontainers.image.tile="Dionysus Hercules Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", "./"]

COPY [".env", "./.env"]

RUN ["pnpm", "install", "--only=production"]

COPY --from=build /usr/share/app/build ./build

ENV NODE_ENV=development

EXPOSE 4000/tcp

ENTRYPOINT ["node", "build/src/index.js"]
