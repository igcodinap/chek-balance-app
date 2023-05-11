# Stage 1: Compile Angular Application
FROM node:18.15.0 AS compile-image
WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build --omit=dev

# Stage 2: Serve Angular Application via Nginx
FROM nginx:alpine
COPY --from=compile-image /opt/ng/dist/chek-balance-app /usr/share/nginx/html