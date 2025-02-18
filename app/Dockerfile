FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Development stage
FROM development AS development

ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["pnpm", "run", "dev"]


# Production stage (multi-stage build)
FROM development AS production

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

CMD ["npm", "run", "start"]