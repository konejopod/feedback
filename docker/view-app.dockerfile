FROM node:12.10.0-alpine

RUN apk update && \
	apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
  apk add --no-cache make gcc g++ python && \
  yarn global add serve && \
  rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV HOST 0.0.0.0
ENV PORT 5000
ENV NODE_ENV "production"

EXPOSE 5000

WORKDIR /app

CMD ["serve", "-s", "./build/"] 
