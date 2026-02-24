# ---------- Dependencies + Build Stage ----------
FROM node:20-bullseye AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the application
COPY . .

# Generate Prisma client inside container
RUN npx prisma generate

# Build Next.js app
RUN npm run build


# ---------- Production Runtime Stage ----------
FROM node:20-bullseye AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]