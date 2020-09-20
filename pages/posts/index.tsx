import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from 'next';
import Link from 'next/link';
import getDataBaseConnection from '../../lib/getDataBaseConnection';
import {Post} from '../../src/entity/Post';
import {isMetaProperty} from '@babel/types';

interface FirstProps {
  posts: Array<{
    content: string;
    title: string;
    id: number;
  }>;
}

const Posts: NextPage<FirstProps> = (props) => {
  const {posts} = props;
  const postNodes = posts.map((post) => {
    return (
      <div className="post-tile" key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <div className="title">{post.title}</div>
        </Link>
        <div className="content">{post.content}</div>
      </div>
    );
  });

  return (
    <div className='blog-list'>
      {postNodes}
      <style jsx>
        {`
           .blog-tile {
              display: flex;
           }
        `}
      </style>
    </div>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {manager} = await getDataBaseConnection();
  const posts = await manager.find(Post).then((posts) => {
    return posts.map((post) => {
      const newPost = {
        ...post,
        updatedAt: post.updatedAt.getTime(),
        createdAt: post.createdAt.getTime(),
      };
      delete newPost.updatedAt;
      delete newPost.createdAt;
      return newPost;
    });
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    },
  };
};
