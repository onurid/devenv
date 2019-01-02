

FROM httpd:2.4

WORKDIR /var/www/html/

COPY /app ./app
COPY /assets ./assets
COPY index.html .

# CMD [“docker build -t my-apache2 ."]
# RUN docker run -dit --name my-running-app -p 80:80 my-apache2"]

# EXPOSE 80


# Copy apache vhost file to proxy php requests to php-fpm container
COPY demo.apache.conf /usr/local/apache2/conf/demo.apache.conf
RUN echo "Include /usr/local/apache2/conf/demo.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf