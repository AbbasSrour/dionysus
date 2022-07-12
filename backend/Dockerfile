# Specify a base image
FROM node:alpine AS app

# Add pnpm
RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

# Specify a working directory
WORKDIR /usr/share/app

# Copy the dependencies file
COPY package.json tsconfig.json ./

#Install dependencies
RUN ["pnpm", "install"]

# Copy source code files
COPY ./src ./src

# Default command
RUN ["pnpm","build"]

# Specify a base image
FROM node:alpine

# Add pnpm
RUN apk add --no-cache curl \
     && curl -sL https://unpkg.com/@pnpm/self-installer | node

# Specify a working directory
WORKDIR /usr/app

# Copy some files
COPY package.json development.env staging.env ./

# Install production dependencies
RUN ["pnpm", "install", "--only=production"]

# Copy build
COPY --from=app /usr/share/app/build ./build

# Expose Port
EXPOSE 5000

# Start application
CMD ["pnpm","run", "stage"]