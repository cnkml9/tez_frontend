FROM node:18-alpine as builder
WORKDIR /E-COMMERCECLIENT/

COPY public/ /E-COMMERCECLIENT/public

COPY public/light /E-COMMERCECLIENT/public/Light

COPY src/ /E-COMMERCECLIENT/src

COPY package.json /E-COMMERCECLIENT/

RUN npm install  --force

CMD ["npm", "start"]

# FROM node:18-alpine as builder
# WORKDIR /E-COMMERCECLIENT/

# COPY public/ /E-COMMERCECLIENT/public

# COPY public/light /E-COMMERCECLIENT/public/Light

# COPY src/ /E-COMMERCECLIENT/src

# COPY package.json /E-COMMERCECLIENT/

# RUN npm install --only=production --force

# COPY . .

# ENV NODE_ENV=production

# CMD ["npm", "start"]

