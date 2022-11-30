import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

const BordioBoardDocument: React.FC = () => (
  <Html lang="en">
    <Head>
      <meta name="author" content="Bordio board" />
      <meta name="theme-color" content="#bf9425" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Bordio board" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Bordio board" />
      <meta name="msapplication-navbutton-color" content="#bf9425" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="manifest" href="/manifest.json" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default BordioBoardDocument;
