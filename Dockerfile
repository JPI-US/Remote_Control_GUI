# ============================
# 1️⃣ Builder Stage
# ============================
FROM node:20-bullseye AS builder

# Set working directory
WORKDIR /app

# Install system build tools for native modules (Prisma, node-gyp, etc.)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json* ./

# Clean npm cache and install dependencies deterministically
RUN npm cache clean --force
RUN npm ci --no-optional

# Copy all source files
COPY . .

# Generate Prisma client (must run after dependencies)
RUN npx prisma generate

# Build Next.js app
RUN npm run build


# ============================
# 2️⃣ Production Stage
# ============================
FROM node:20-bullseye AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy only what’s needed for production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public

# Expose default Next.js port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]