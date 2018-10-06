FROM node:8.12.0-alpine as stage-build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run-script build

FROM nginx:1.12-alpine
COPY --from=stage-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g"]