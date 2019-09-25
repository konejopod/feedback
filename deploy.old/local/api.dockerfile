FROM mhart/alpine-node:10.16.3
VOLUME [ "../api:/app" ]
WORKDIR /app
CMD ["node", "index.js"] 
