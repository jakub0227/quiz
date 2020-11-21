/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import React from 'react';
import {Route} from "../../types/Route";
import {useTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {AboutPageItems} from "./AboutPageItems/AboutPageItems";


export const AboutPage: Route = () => {
    const theme = useTheme();
    const styles = {
        root: css`      
      display: flex;
      flex-direction: column;
      width: 100%;      
      justify-content: space-between;         
      margin-top: ${theme.spacing(10)} px;
      padding: ${theme.spacing(2)}px
    `,
        welcome: css`
      width: 100%;        
      margin-top: ${theme.spacing(5)}px;
      margin-bottom: ${theme.spacing(5)}px;
      text-align: center;
      max-width: 1100px;          
      border-radius: 15px;
      border: 2px solid ${theme.palette.primary.main};          
      box-shadow: 0 5px 10px rgba(0,0,0,0.25);    
    `,
        textMain: css`
      text-align: center;
      margin-top: ${theme.spacing(5)}px;
`
    }
    return (
        <Container maxWidth='md' css={styles.root}>
            <Typography css={styles.textMain} variant='h5'>
                About our Quiz App
            </Typography>
            <Container css={styles.welcome}>
                <AboutPageItems/>
            </Container>
        </Container>
    );
};
AboutPage.routeName = '/about'
AboutPage.displayName = 'About'