import {Post} from './entity/Post';
import {User} from './entity/User';
import {Comment} from './entity/Comment';
import 'reflect-metadata';
import {createConnection} from 'typeorm';

createConnection()
  .then(async (connection) => {
    const {manager} = connection;
    const user = new User();
    user.username = 'cyt';
    user.passwordDigest = '..13121aq';

    await manager.save(user).catch((e) => console.log('e', e));

    const post = new Post();
    post.title = '我的第一篇博客';
    post.content = '第一篇博客的内容';
    post.author = user;
    await manager.save(post).catch((e) => console.log('e', e));

    const comment = new Comment();
    comment.content = '他急了他急了';
    comment.post = post;
    comment.user = user;
    await manager.save(comment).catch((e) => console.log('e', e));

    await connection.close();
  })
  .catch((error) => console.log(error));
