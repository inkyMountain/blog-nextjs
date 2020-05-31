import React, {Fragment} from 'react';
import Head from 'next/head';
import 'global.less';

export default function App({Component, pageProps}) {
  return <Fragment>
    <Head>
      <title>陈亦涛</title>
      <meta name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
    </Head>
    <div className="global-div">global</div>
    <Component {...pageProps} />
  </Fragment>;
}
