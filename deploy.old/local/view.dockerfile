FROM mhart/alpine-node:10.16.3
VOLUME [ "../view:/app" ]
WORKDIR /app
RUN ls -la
CMD ["npm", "start"] 
