# Use the official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY src/package.json src/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY src/ ./

# Expose the required port for Cloud Run
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
