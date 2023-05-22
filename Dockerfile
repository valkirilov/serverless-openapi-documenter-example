# The name of the base image which will be used to build the container
# More info: https://hub.docker.com/_/node
FROM node:lts-alpine

# Install some global tools
RUN npm install -g serverless

# Create a directory inside the container and switch to it
WORKDIR /app

# Copy package.json and package-lock.json files to /app directory
COPY ./package*.json .

# Install the npm dependencies to prepare the project for development
# Note: For some reason it doesn't install properly ESLint, so we do it as part of the CMD step
# RUN npm install

# Use non-root user
USER node

# Copy the source code to /app directory
COPY --chown=node:node . .

# Prepare the application by installing the dependencies
# Start the application and serve REST API
# CMD ["npm", "start"]
CMD npm install && npm run start

# Prevernt Docker container to exit 
# ENTRYPOINT ["tail", "-f", "/dev/null"]
