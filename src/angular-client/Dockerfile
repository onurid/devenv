

FROM httpd:2.4

RUN git clone https://github.com/osmanonuryasar/backoffice.git

WORKDIR /var/www/html/

COPY /backoffice .

COPY backoffice.apache.conf /usr/local/apache2/conf/backoffice.apache.conf

RUN echo "Include /usr/local/apache2/conf/backoffice.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf
