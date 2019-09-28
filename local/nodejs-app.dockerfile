FROM node:12.10.0-alpine

ARG APP_PORT

RUN apk update && \
	apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
	rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV PORT ${APP_PORT}

EXPOSE ${APP_PORT}

WORKDIR /app

CMD ["npm", "run", "start"] 
