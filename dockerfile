# Dockerfile for TODO-APP

# Use Node.js LTS as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["node", "app.js"]

