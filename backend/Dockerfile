FROM node:alpine AS build

LABEL org.opencontainers.image.vendor=dionysus-api
LABEL com.dionysus.intermediate=true

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/share/app

COPY ["package.json",  "tsconfig.json","./"]

# Exec Form yields less processes, and better signal handling
RUN ["pnpm", "install"]

COPY ["src", "tsconfig.json","./"]
COPY ["./src","./src"]

# Exec Form yields less processes, and better signal handling
RUN ["pnpm","build"]

FROM node:alpine

LABEL org.opencontainers.image.vendor=dionysus-api
LABEL org.opencontainers.image.tile="Dionysus Rest Api"

RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/app

COPY ["package.json", "development.env", "staging.env", "./"]

# Exec Form yields less processes, and better signal handling
#RUN ["pnpm", "install", "--only=production"]
COPY --from=build /usr/share/app/node_modules ./node_modules

COPY --from=build /usr/share/app/build ./build

ENV NODE_ENV=staging

EXPOSE 5000/tcp

# Exec Form yields less processes, and better signal handling
# Using pnpm to run server yiels: 3 processes, 5 with cross env
#CMD ["pnpm", "stage"]
# Running node without pnpm yields: 1 process
#CMD ["node", "build/src/index.js"]
# Entrypoint instead of cmd allows for easier overridding of the starting command
ENTRYPOINT ["node", "build/src/index.js"]
