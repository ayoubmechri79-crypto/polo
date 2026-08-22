FROM node:20

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    chromium \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    fonts-noto-color-emoji \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV CHROME_PATH=/usr/bin/chromium

WORKDIR /app

COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

WORKDIR /app/backend
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev

WORKDIR /app/frontend
RUN npm ci 2>/dev/null || npm install
COPY frontend/ ./
RUN npm run build

WORKDIR /app/backend
COPY backend/ ./

RUN cp -r /app/frontend/dist ./public_html

WORKDIR /app/backend

EXPOSE 3002

CMD ["node", "server.js"]
