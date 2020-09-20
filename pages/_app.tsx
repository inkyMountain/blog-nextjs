import React, {Fragment} from 'react';
import Head from 'next/head';
import {GetServerSideProps} from 'next';

export default function App({Component, pageProps}) {
  return (
    <Fragment>
      <Head>
        <title>陈亦涛</title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
        />
      </Head>
      <Component {...pageProps} />

      <style jsx global>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            text-decoration: none;
            outline: none;
            border: none;
            background: none;
          }

          a:link,
          a:visited,
          a:hover,
          a:active {
            color: inherit;
            text-decoration: none;
          }

          ol,
          ul {
            list-style: none;
          }

          html,
          body,
          #app,
          #root,
          #_next {
            height: 100%;
          }

          button {
            -webkit-appearance: none;
          }

          input[type='password']::-ms-reveal,
          input[type='password']::-ms-clear {
            display: none;
          }
        `}
      </style>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('app getServerSideProps');
  return {
    props: {}
  };
};
