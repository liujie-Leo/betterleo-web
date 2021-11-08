FROM nginx
LABEL name="betterleo-web"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./docker-front.conf /etc/nginx/conf.d
EXPOSE 80
