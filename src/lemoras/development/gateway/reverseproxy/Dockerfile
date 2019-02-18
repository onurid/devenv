FROM nginx:alpine

#  default conf for proxy service
COPY nginx.conf /etc/nginx/nginx.conf

# NOT FOUND response
COPY ./backend-not-found.html /var/www/html/backend-not-found.html

# Proxy configurations
COPY ./includes/ /etc/nginx/includes/
