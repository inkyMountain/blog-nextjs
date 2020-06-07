import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Post} from './entity/Post';

createConnection().then(async connection => {
  const {manager} = connection;
  const originalPosts = await manager.find(Post);
  console.log('originalPosts', originalPosts);
  if (originalPosts.length > 0) return;
  const posts = [...new Array(10)].map(() => new Post('title', 'content'));
  console.log('posts to insert', posts);
  await manager.save(posts).catch(e => console.log('e', e));
  console.log('posts', await manager.find(Post));
  await connection.close();

}).catch(error => console.log(error));
