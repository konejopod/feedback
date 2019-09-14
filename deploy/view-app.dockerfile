FROM mhart/alpine-node:10.16.3
WORKDIR /app
RUN apk add --no-cache make gcc g++ python \
  && yarn global add serve
CMD ["serve", "-s", "./build/"] 
