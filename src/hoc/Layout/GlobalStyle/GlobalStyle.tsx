/** @jsx jsx */
import {jsx, css, Global} from "@emotion/core";
import React from 'react';

export const GlobalStyle = () => <Global styles={css`
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';

*, *::before, *::after  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: unset;
}
`}/>;