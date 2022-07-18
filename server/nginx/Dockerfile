FROM nginx:1.23.0-alpine

WORKDIR /etc/nginx

COPY nginx.conf nginx.key nginx-certificate.crt ./
COPY dionysus.key dionysus.crt ./