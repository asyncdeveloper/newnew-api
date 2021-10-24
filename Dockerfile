FROM node:12.13.0-alpine

# Show all node logs
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
RUN mkdir -p /opt/app

# Set Working Directory
WORKDIR /opt/app/

# Copy only package.json for cache
COPY package.json ./

# Add libvips
RUN apk add --upgrade vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

# Install Dependncies
RUN npm install --ignore-optional --pure-lockfile --non-interactive

# Copy Files
COPY . ./

EXPOSE 3001

CMD ["npm", "start"]