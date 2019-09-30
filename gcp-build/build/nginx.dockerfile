FROM nginx:1.17.4

EXPOSE 80

COPY gcp-build/build/nginx/config/nginx.conf /etc/nginx/conf.d/default.conf
