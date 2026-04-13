# -------- Stage 1: Builder --------
FROM node:20-slim AS builder
WORKDIR /app

# Build deps for native modules (bcrypt) and OpenSSL for Prisma
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends python3 make g++ openssl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Install dependencies (including devDependencies needed for build)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Ensure pages/_document.js exists (fixes 404 prerender "Html" error)
RUN node scripts/ensure-pages-document.js

# Generate Prisma client (no DB connection needed — this is just codegen)
RUN npx prisma generate

# Build Next.js
# No secrets needed here. Server-side env vars (DATABASE_URL, JWT_SECRET, etc.)
# are runtime concerns — Next.js compiles the code paths, not the values.
# If you have NEXT_PUBLIC_* vars that must be inlined, add only those:
#   --build-arg NEXT_PUBLIC_API_URL and ARG/ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN NODE_ENV=production npm run build

# -------- Stage 2: Production Runner --------
FROM node:20-slim AS runner
WORKDIR /app

# OpenSSL so Prisma can load its query engine
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends openssl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

# Copy build output and runtime assets from builder
COPY --from=builder /app/.next           ./.next
COPY --from=builder /app/public          ./