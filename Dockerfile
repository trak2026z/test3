FROM node:18

WORKING_DIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
COPY . .

EXPOSE 5000

COMMAND [npm, run, build]
RUN build
COMMAND [run]
RUN dev