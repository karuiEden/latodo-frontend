FROM node:alpine
LABEL authors="karui"
COPY . /src
WORKDIR /src
RUN npm install -g @angular/cli
RUN npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]

