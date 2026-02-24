FROM node:20-bullseye AS builder
WORKDIR /app

# Install build tools
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./

# Increase npm fetch timeout + legacy peer deps + no optional
RUN npm config set fetch-timeout 60000
RUN npm install --no-optional --legacy-peer-deps

COPY . .

# Prisma client
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