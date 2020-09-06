import Head from 'next/head';
import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import getDataBaseConnection from '../lib/getDataBaseConnection';

interface Props {
  posts: any;
}

const Home: NextPage<Props> = (props) => {

  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const {manager} = await getDataBaseConnection();
  const posts = await manager.query('select * from posts').then((posts) => {
    return posts.map((post) => {
      const newPost = {
        ...post,
        updatedAt: post.updated_at.getTime(),
        createdAt: post.created_at.getTime(),
      };
      delete newPost.updated_at;
      delete newPost.created_at;
      return newPost;
    });
  });

  console.log('posts', posts);

  return {
    props: {
      posts,
    },
  };
};
