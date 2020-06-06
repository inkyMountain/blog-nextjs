import React, {useCallback, useEffect, useState} from 'react';
import logo from 'assets/images/vercel.svg';
import router from 'next/router';
import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from 'next';

interface Blog {
  content: string;
}

interface FirstProps {
  blog: Blog;
  requestTime: number;
}

const First: NextPage<FirstProps> = (context) => {
  console.log('context', context);
  console.log(new Date(context.requestTime));
  const {blog} = context;
  const navigateToHome = useCallback(() => {void router.push('/');}, [],);
  useEffect(() => {
    console.log('use Effect');
  });
  return <div className="first-post">
    First Post
    <button className="back-to-home" onClick={navigateToHome}>Back to home</button>
    <img src={logo} alt="logo"/>
    <div className="innerHtml"
         style={{whiteSpace: 'pre'}}
         dangerouslySetInnerHTML={{
           __html: blog.content.replace(/\\n/g, '\n')
         }}/>
  </div>;
};

export default First;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/blogs/v1', {
    body: JSON.stringify({blogName: 'first-blog.md'}),
    method: 'POST'
  })
    .then<{ blog: Blog }>(res => res.json());
  return {props: res};
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch('http://localhost:3000/api/blogs/v1', {
//     body: JSON.stringify({blogName: 'first-blog.md'}),
//     method: 'POST'
//   })
//     .then<{ blog: Blog }>(res => res.json());
//   return {props: res};
// };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{params: {id: 'first-post'}}],
    fallback: false
  };
};
