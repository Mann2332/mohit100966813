# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Set environment variable for Cloud Run
ENV PORT=8080

# Expose the application port
EXPOSE 8080

# Command to run the app
CMD ["node", "src/server.js"]
