import { Provider } from 'urql';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/Theme';
import client from '../client';
import { ReactElement } from 'react';

interface Props {
  Component: () => JSX.Element;
  pageProps: Record<string, unknown>;
}

export default function App({ Component, pageProps }: Props): ReactElement {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
