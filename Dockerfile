# -------- Stage 1: Builder --------
# Use same base (slim/Debian) as runner so native modules (bcrypt, Prisma) are built for glibc, not musl
FROM node:20-slim AS builder
WORKDIR /app

# Build deps for native modules (e.g. bcrypt) and OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y --no-install-recommends python3 make g++ openssl ca-certificates && rm -rf /var/lib/apt/lists/*

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
# Use slim (Debian) instead of alpine to avoid SIGSEGV with Next.js/Prisma on musl
FROM node:20-slim AS runner
WORKDIR /app

# Install OpenSSL so Prisma can load the correct query engine (debian-openssl-1.1.x or 3.0.x)
RUN apt-get update -y && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# Set production environment
ENV NODE_ENV=production

# Copy only what's needed from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
# Prisma client output (includes query engine for debian-openssl-3.0.x on slim)
COPY --from=builder /app/src/generated/prisma ./src/generated/prisma

# Expose port
EXPOSE 3000

# Pass required env at run time, e.g.:
#   docker run -p 3000:3000 -e DATABASE_URL="..." -e JWT_SECRET="..." -e SOLAR_KEY_ID="..." -e SOLAR_KEY_VALUE="..." -e FRONIUS_SYSTEM_KEY="..." remote_control_gui:latest
# Or: docker run -p 3000:3000 --env-file .env.production remote_control_gui:latest
CMD ["npm", "start"]