FROM node:12-alpine

ENV PORT=80 

# Metadata as defined in OCI image spec annotations - https://github.com/opencontainers/image-spec/blob/master/annotations.md
LABEL org.opencontainers.image.title="TEAM 4" \
      org.opencontainers.image.description="TEAM 4 DockerFile" \
      org.opencontainers.image.authors="Nitin Gopinathan" \
      org.opencontainers.image.vendor="TEAM 4"

# add debugging utilities
RUN apk --no-cache add \
  curl \
  ca-certificates \
  jq \
  less \
  vim

# bundle app and install dependencies 
COPY . /app
WORKDIR /app
RUN npm install

# run application
EXPOSE $PORT
CMD npm start
