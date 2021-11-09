FROM nginx
LABEL name="betterleo-web"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
# COPY /home/betterleo/nginxConfig/web.conf /etc/nginx/conf.d
EXPOSE 80
