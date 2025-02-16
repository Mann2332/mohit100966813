# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before copying the rest
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files into the working directory
COPY . .

# Expose port 8080 (required for Cloud Run)
EXPOSE 8080

# Command to start the application
CMD ["npm", "start"]
