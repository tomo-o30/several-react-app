# Node.jsのイメージをベースにする
FROM node:16-alpine

# ワーキングディレクトリを設定する
WORKDIR /to-do-app

# ReactアプリケーションのソースコードをDockerイメージ内にコピーする
COPY . .

# 必要なパッケージをインストールする
RUN npm install
RUN npm run build

# Nginxをインストールする
RUN apk add --no-cache nginx

# Nginxの設定をコピーする
COPY nginx.conf /etc/nginx/nginx.conf

# ポートを公開する
EXPOSE 80

# コンテナを開始するためのコマンドを設定する
CMD ["nginx", "-g", "daemon off;"]