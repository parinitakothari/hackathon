
FROM node:latest

# create destination directory
#RUN mkdir -p /usr/src/user-app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . .
RUN npm install

# set env nariables
ENV DATABASE_HOST = "local host"
ENV DATABASE_PORT = "5432"
ENV DATABASE_NAME = "user"
ENV DATABASE_USERNAME = "postgres"
ENV DATABASE_PASSWORD = "foo"

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
# ENV USER_HOST=0.0.0.0
# set app port
# ENV USER_PORT=5000

# start the app
CMD [ "node", "/src/index.js" ]






