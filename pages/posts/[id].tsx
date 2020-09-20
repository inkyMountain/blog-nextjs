import React, {useCallback, useEffect, useState} from 'react';
import logo from 'assets/images/vercel.svg';
import router from 'next/router';
import {GetServerSideProps, NextPage} from 'next';
import getDatabaseConnection from '../../lib/getDatabaseConnection';
import {Post} from '../../src/entity/Post';

interface Blog {
  content: string;
  title: string;
}

interface FirstProps {
  post: Blog;
}

const First: NextPage<FirstProps> = (context) => {
  const {post} = context;
  console.log('post', post);

  return (
    <div className='post-detail'>
      <div className="title">{post.title}</div>
      <div className="content">{post.content}</div>
    </div>
  );
};

export default First;

export const getServerSideProps: GetServerSideProps<{ [key: string]: any }, { id: string }> = async (context) => {
  const {params} = context;
  const {manager} = await getDatabaseConnection();
  const post = await manager.findOne(Post, params.id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  };
};
