import type {AppProps} from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import React, {Fragment} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {ThemeProvider} from 'styled-components';

import {NprogressProps} from '~/constants';
import {GlobalStyles, theme} from '~/styles';

const BordioBoardApp = ({Component, pageProps}: AppProps): JSX.Element => (
  <Fragment>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <NextNProgress {...NprogressProps} />

    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </DndProvider>
  </Fragment>
);

export default BordioBoardApp;
