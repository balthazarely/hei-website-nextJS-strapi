import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
// import Header from "./nav/Header";
import ChakraNav from "./nav/ChakraNav";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('/static/Lato-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGray);
    --offWhite: #ededed;
    --maxWidth: 1400px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
`;

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth); */
  /* margin: 0 auto;
  padding: 2rem; */
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}
      <ChakraNav />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
