FROM node:alpine AS development

LABEL org.opencontainers.image.vendor=dionysus-hercules
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

LABEL org.opencontainers.image.vendor=dionysus-apollo
LABEL org.opencontainers.image.tile="Dionysus Hercules Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", ".env", "./"]

RUN ["pnpm", "install", "--only=production"]

COPY --from=development /usr/share/app/build ./dist

COPY --from=development /usr/share/app/prisma ./dist/prisma

ENV NODE_ENV=staging

EXPOSE 4000/tcp

ENTRYPOINT ["node", "build/src/index.js"]
