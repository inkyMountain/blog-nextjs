import React, {useCallback} from 'react';
import logo from 'assets/images/vercel.svg';
import router from 'next/router';

export default function First({blog}) {
  const backToHome = useCallback(() => {void router.push('/');}, [],);

  return <div className="first-post">
    First Post
    <button className="back-to-home" onClick={backToHome}>Back to home</button>
    <img src={logo} alt="logo"/>
    <div className="innerHtml"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify(blog.content).replace(/\\n/g, '')
         }}/>
  </div>;
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/blogs/v1', {
    body: JSON.stringify({blogName: 'first-blog.md'}),
    method: 'POST'
  });
  const {blog} = await res.json();
  console.log('blog', blog);
  return {
    props: {
      blog
    }
  };
};
