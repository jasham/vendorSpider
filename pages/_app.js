import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../app/components/themes';
import { store } from '../app/lib/utility/store';
import { reducer } from '../app/lib/utility/reducer';
import 'react-multi-carousel/lib/styles.css';

export const GlobalContext = React.createContext();
let socket;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [globalState, dispatch] = useReducer(reducer, store);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (!socket) {
      socket = io.connect('http://localhost:8080');
    }
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{ state: globalState, allDispatch: dispatch }}
      >
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
