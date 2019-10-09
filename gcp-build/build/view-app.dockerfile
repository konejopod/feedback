FROM node:12.10.0-alpine

RUN apk update && \
	apk add --no-cache tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
	rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV PORT 3000

EXPOSE 3000
RUN mkdir -p app
COPY view /app

WORKDIR /app
RUN rm -rf README.md && \
	ls -la

RUN npm i

CMD ["npm", "run", "start"] 
