FROM node:16-alpine as builder

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

RUN npm run build
RUN rm -rf node_modules

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

