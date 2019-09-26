FROM node:12.10.0-alpine

RUN apk update && \
	apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
    rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV HOST 0.0.0.0
ENV PORT 5100
ENV NODE_ENV "production"

EXPOSE 5100

WORKDIR /app

CMD ["node", "index.js"] 
