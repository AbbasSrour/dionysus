FROM node:alpine AS development

LABEL org.opencontainers.image.vendor=dionysus-hesita
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json", ".npmrc" ,"./"]

#RUN ["pnpm", "install"]

COPY [".", "."]

#RUN ["pnpm", "run", "build"]

#####################################################################################################################
FROM node:alpine AS production

LABEL org.opencontainers.image.vendor=dionysus-hesita
LABEL org.opencontainers.image.tile="Dionysus Hesita Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", ".env", "./"]

RUN ["pnpm", "install", "--only=production"]

COPY --from=development /usr/share/app/build ./build

COPY --from=development /usr/share/app/prisma ./build/prisma

ENV NODE_ENV=staging

EXPOSE 4001/tcp

ENTRYPOINT ["node", "build/src/index.js"]
