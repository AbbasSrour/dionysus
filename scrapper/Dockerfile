FROM node:alpine AS development

LABEL org.opencontainers.image.vendor=dionysus-scraper
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json","./"]

RUN ["pnpm", "install"]

COPY ["src","tsconfig.json","prisma","./"]

RUN ["pnpm","build"]

FROM node:alpine AS production

LABEL org.opencontainers.image.vendor=dionysus-engine
LABEL org.opencontainers.image.tile="Dionysus Rest Engine Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", "./"]

COPY ["stage.env", "./.env"]

#RUN ["pnpm", "install", "--only=production"]
COPY --from=build /usr/share/app/node_modules ./node_modules

COPY --from=build /usr/share/app/build ./build

ENV NODE_ENV=staging

EXPOSE 4001/tcp

# Using pnpm to run server yiels: 3 processes, 5 with cross env
#CMD ["pnpm", "stage"]
# Running node without pnpm yields: 1 process
#CMD ["node", "build/src/index.js"]
# Entrypoint instead of cmd allows for easier overridding of the starting command
ENTRYPOINT ["node", "build/src/index.js"]
