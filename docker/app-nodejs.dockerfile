FROM node:10.13.0-alpine

RUN apk update && \
	apk add tzdata && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
    rm /var/cache/apk/*

ENV TZ Europe/Berlin
ENV HOST 0.0.0.0
ENV PORT 5100
ENV NODE_ENV "production"

#ARG TGZ_FILE

EXPOSE 5100

#RUN mkdir -p /app
#COPY nodejs/.npmrc /app
#COPY ${TGZ_FILE} /app/app.tgz

WORKDIR /app
#RUN tar -xvzf app.tgz --strip-components=1 && \
#	rm app.tgz && \
#    npm i --production && \
#    rm .npmrc
#RUN npm i
#RUN ls -la

CMD ["node", "index.js"] 
