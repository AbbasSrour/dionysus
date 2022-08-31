FROM node:alpine AS development

LABEL org.opencontainers.image.vendor=dionysus-coeus
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json","./"]

RUN ["pnpm", "install"]

COPY [".", "."]

RUN ["pnpm", "prisma", "migrate"]

RUN ["pnpm","build"]

FROM node:alpine AS production

LABEL org.opencontainers.image.vendor=dionysus-coeus
LABEL org.opencontainers.image.tile="Dionysus Coeus Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", ".env", "./"]

RUN ["pnpm", "install", "--only=production"]

COPY --from=build /usr/share/app/build ./build

COPY --from=build /usr/share/app/prisma ./build/prisma

ENV NODE_ENV=staging

EXPOSE 4000/tcp

ENTRYPOINT ["node", "build/src/index.js"]
