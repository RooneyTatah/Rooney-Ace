# Simple Nginx image to serve this static site
FROM nginx:1.27-alpine

# Remove default Nginx web assets
RUN rm -rf /usr/share/nginx/html/*

# Copy site files
COPY . /usr/share/nginx/html

# Expose port (documentational)
EXPOSE 80

# Use default nginx entrypoint/cmd
