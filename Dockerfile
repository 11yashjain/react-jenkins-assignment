# Step 1: Build the React app
FROM node:14 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the static build using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: copy custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
