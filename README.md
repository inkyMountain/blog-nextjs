## Getting Started

# 如何开始开发
```shell script
# 启动数据库
docker run -v "blog-data":/var/lib/postgresql/data -p5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
# 进入数据库
docker exec -it [containerId] bash
# 展示所有 database
\l; 

# choose your database
\c [database-name]

# 展示所有 table
\d

# select data
select * from user;
```

```shell script
# 建表，比如建一个名为 blog_development 的表。
CREATE DATABASE [database name] ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';

# 创建位于 src/migration 下的 migartion 文件
npm run migartion:create

# 启动开发服务器
npm run dev

# 访问网页
start http://localhost:3000
```


