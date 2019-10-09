FROM node:12.10.0-alpine

RUN apk update && \
	apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
	rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV PORT ${APP_PORT}

EXPOSE ${APP_PORT}

RUN mkdir -p app
COPY api /app

WORKDIR /app
RUN rm -rf .env-local README.md && \
	ls -la

RUN npm i

CMD ["npm", "run", "start-prod"] 
