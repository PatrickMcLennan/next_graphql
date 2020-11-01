import { css, createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';

type CSS = FlattenSimpleInterpolation;

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    border-style,
    #__next {
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        overflow-x: hidden;
    }
`;

export const theme = {
  /**
   * Layout
   */
  flex: (jc = `center`, ai = `center`, fd = `row`, fw = `nowrap`): CSS => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,

  /**
   * Typography
   */
  fontLine: (fs: string, lh?: string): CSS => css`
    font-size: ${fs}rem;
    line-height: ${lh ? `${lh}rem` : `normal`};
  `,
};
