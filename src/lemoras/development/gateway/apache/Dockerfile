
FROM httpd:2.4

MAINTAINER Onur Yasar - Lemoras.com <onurid@yandex.com>

WORKDIR /var/www/html/

COPY domain.apache.conf /usr/local/apache2/conf/domain.apache.conf

RUN echo "Include /usr/local/apache2/conf/domain.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf
