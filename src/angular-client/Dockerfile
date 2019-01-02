

FROM httpd:2.4

MAINTAINER Onur Yasar - Lemoras.com <onurid@yandex.com>

#RUN apt-get update
RUN apt-get update && apt-get install git -y

WORKDIR /var/www/html/

RUN git clone https://github.com/osmanonuryasar/backoffice.git && cp -a ./backoffice/. .

COPY backoffice.apache.conf /usr/local/apache2/conf/backoffice.apache.conf

RUN echo "Include /usr/local/apache2/conf/backoffice.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf
