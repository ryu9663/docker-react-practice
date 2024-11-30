FROM node:20 as builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY ./ ./

# CMD ["pnpm", "run", "build"]
RUN pnpm run build


FROM nginx
EXPOSE 80
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html