# Stage 0, for downloading project’s npm dependencies, building and compiling the app.
FROM node:14.15-alpine3.10

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add app
COPY . /usr/src/app
# RUN npm install -g @angular/cli
# RUN npm install

# start app
# RUN ng build --prod

# Stage 1, for copying the compiled app from the previous step and making it ready for production with Nginx
FROM nginx:alpine
COPY /dist/frontend-trunkall /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf