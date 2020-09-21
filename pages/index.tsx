import Head from 'next/head';
import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import getDatabaseConnection from '../lib/getDatabaseConnection';
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
  const {manager} = await getDatabaseConnection();
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

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    },
  };
};
