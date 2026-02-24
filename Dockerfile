# -------- Stage 1: Dependencies --------
FROM node:20-bullseye AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# -------- Stage 2: Build --------
FROM node:20-alpine AS builder
WORKDIR /app

# Accept secrets as build args
ARG DATABASE_URL
ARG SOLAR_KEY_ID
ARG SOLAR_KEY_VALUE
ARG JWT_SECRET
ARG FRONIUS_SYSTEM_KEY

# Set them as environment variables for build
ENV DATABASE_URL=$DATABASE_URL
ENV SOLAR_KEY_ID=$SOLAR_KEY_ID
ENV SOLAR_KEY_VALUE=$SOLAR_KEY_VALUE
ENV JWT_SECRET=$JWT_SECRET
ENV FRONIUS_SYSTEM_KEY=$FRONIUS_SYSTEM_KEY
ENV NODE_ENV=production

# Copy dependencies and code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client and build Next.js
RUN npx prisma generate
RUN npm run build

# -------- Stage 3: Production runner --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Start app
CMD ["npm", "start"]