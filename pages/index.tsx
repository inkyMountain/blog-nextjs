import Head from 'next/head';
import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import getDataBaseConnection from '../lib/getDataBaseConnection';
import {Post} from '../src/entity/Post';

interface Props {
}

const Posts: NextPage<Props> = (props) => {

  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
    </div>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('index getServerSideProps');
  const {manager} = await getDataBaseConnection();
  const posts = await manager.find(Post).then((posts) => {
    return posts.map((post) => {
      return {
        ...post,
        updatedAt: post.updatedAt.getTime(),
        createdAt: post.createdAt.getTime(),
      };
    });
  });
  console.log('posts', posts);
  // const posts = await manager.query('select * from posts').then((posts) => {
  //   return posts.map((post) => {
  //     const newPost = {
  //       ...post,
  //       updatedAt: post.updated_at.getTime(),
  //       createdAt: post.created_at.getTime(),
  //     };
  //     delete newPost.updated_at;
  //     delete newPost.created_at;
  //     return newPost;
  //   });
  // });

  return {
    props: {
      posts,
    },
  };
};
