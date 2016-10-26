FROM ubuntu:14.04

MAINTAINER Daniel Kokott <petur.hjartarson@ecsolutions.se>

# Update and install required packages.
RUN apt-get update -y
RUN apt-get install -y wget

ENV NODE_VERSION v4.4.2

# Download and install node.js.
RUN wget -O - http://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-x64.tar.gz \
    | tar xzf - --strip-components=1 --exclude="README.md" --exclude="LICENSE" \
    --exclude="ChangeLog" -C "/usr/local"

# Mount current dir as a volume containing all source code.
WORKDIR /i-min-stad

COPY ./dist /iminstad/dist
COPY ./node_modules /iminstad/node_modules
COPY ./server.js /iminstad/server.js
COPY ./package.json /iminstad/package.json

EXPOSE 9090

CMD ["npm","start"]
