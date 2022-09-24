ARG ELK_VERSION

FROM logstash:${ELK_VERSION}

WORKDIR /usr/share/logstash

COPY config pipeline ./

