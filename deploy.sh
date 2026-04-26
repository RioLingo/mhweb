#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== MHconnect Deploy to Vercel ===${NC}\n"

# Step 1: Check Node
echo -e "${YELLOW}[1/5] Kiểm tra Node.js...${NC}"
node --version || { echo -e "${RED}Cần cài Node.js >= 18${NC}"; exit 1; }

# Step 2: Install deps
echo -e "\n${YELLOW}[2/5] Cài dependencies...${NC}"
npm install

# Step 3: Build
echo -e "\n${YELLOW}[3/5] Build production...${NC}"
npm run build
echo -e "${GREEN}✓ Build thành công${NC}"

# Step 4: Install Vercel CLI nếu chưa có
echo -e "\n${YELLOW}[4/5] Kiểm tra Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
  echo "Đang cài Vercel CLI..."
  npm install -g vercel
fi
echo -e "${GREEN}✓ Vercel CLI sẵn sàng${NC}"

# Step 5: Deploy
echo -e "\n${YELLOW}[5/5] Deploy lên Vercel...${NC}"
echo -e "Bạn sẽ được hỏi đăng nhập nếu chưa login.\n"

if [ "$1" == "--prod" ]; then
  vercel --prod
else
  echo -e "${YELLOW}Tip: Chạy './deploy.sh --prod' để deploy lên production URL${NC}"
  vercel
fi
