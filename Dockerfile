# Use an official Node.js image as the base image
FROM node:14

# Set working directory in the container
WORKDIR /app

# Install puppeteer-core
RUN npm install puppeteer-core

# Copy your application files into the container
COPY . .

# Set the command to run your application
CMD ["node", "app.js"]
