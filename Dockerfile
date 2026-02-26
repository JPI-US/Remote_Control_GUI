# -------- Stage 1: Builder --------
FROM node:20-alpine AS builder
WORKDIR /app

# -------- Build-time environment variables --------
# Accept secrets as build args
ARG DATABASE_URL
ARG SOLAR_KEY_ID
ARG SOLAR_KEY_VALUE
ARG JWT_SECRET
ARG FRONIUS_SYSTEM_KEY

# Set ENV so Next.js build can access secrets
ENV DATABASE_URL=$DATABASE_URL
ENV SOLAR_KEY_ID=$SOLAR_KEY_ID
ENV SOLAR_KEY_VALUE=$SOLAR_KEY_VALUE
ENV JWT_SECRET=$JWT_SECRET
ENV FRONIUS_SYSTEM_KEY=$FRONIUS_SYSTEM_KEY

# Copy package files and install dependencies (including devDependencies for build)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Ensure pages/_document.js at both root and src/pages (fixes 404 prerender "Html" error in Docker).
RUN node scripts/ensure-pages-document.js

# Optionally copy .env.production if you want to use the file directly
# COPY .env.production .env.production

# Generate Prisma client
RUN npx prisma generate

# Build Next.js. Use NODE_ENV=production so 404 prerender uses production path (avoids "Html" error when NODE_ENV=development).
RUN NODE_ENV=production npm run build

# -------- Stage 2: Production Runner --------
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy only what's needed from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Expose port
EXPOSE 3000

# Start the app with runtime environment variables
CMD ["npm", "start"]