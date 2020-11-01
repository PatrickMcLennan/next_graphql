import { Provider } from 'urql';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/Theme';
import client from '../client';

interface Props {
  Component: () => JSX.Element;
  pageProps: Record<string, unknown>;
}

export default function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <Provider value={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
