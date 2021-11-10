FROM nginx
LABEL name="betterleo-web"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
