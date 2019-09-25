FROM mhart/alpine-node:10.16.3

#VOLUME [ "../api:/app" ]
RUN ls -la
WORKDIR /app

CMD ["node", "index.js"] 
