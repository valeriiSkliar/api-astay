# Stage 1: Use a temporary image to install bash and @loopback/cli
FROM docker.io/library/node:18-slim AS builder

USER root

# Install bash
RUN apt-get update && apt-get install -y bash

# Install @loopback/cli locally
RUN npm install -g @loopback/cli

# Stage 2: Final image with only necessary files
FROM docker.io/library/node:18-slim

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./

RUN npm install

# Bundle app source code
COPY --chown=node . .

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3030

EXPOSE ${PORT}
CMD [ "node", "." ]
