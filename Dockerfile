# -------- Stage 1: Builder --------
FROM node:20-alpine AS builder
WORKDIR /app
# Accept secrets as build args
ARG DATABASE_URL
ARG SOLAR_KEY_ID
ARG SOLAR_KEY_VALUE
ARG JWT_SECRET
ARG FRONIUS_SYSTEM_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV SOLAR_KEY_ID=$SOLAR_KEY_ID
ENV SOLAR_KEY_VALUE=$SOLAR_KEY_VALUE
ENV JWT_SECRET=$JWT_SECRET
ENV FRONIUS_SYSTEM_KEY=$FRONIUS_SYSTEM_KEY
ENV NODE_ENV=production
# Copy package files
COPY package.json package-lock.json* ./
# Install dependencies
RUN npm ci
# Copy source
COPY . .
# Generate Prisma client and build Next.js
RUN npx prisma generate
RUN npm run build
# -------- Stage 2: Production --------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy built files + dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000
CMD ["npm", "start"]

