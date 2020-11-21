/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import React, {FC} from 'react';
import {GlobalStyle} from "./GlobalStyle/GlobalStyle";
import {Footer} from "./Footer/Footer";
import {Navigation} from "./Navigation/Navigation";
import {Paper} from '@material-ui/core';

export const Layout: FC = (props) => {
    const styles = {
        root: css`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        `,
        page: css`
            flex: 1;                      
        `,
    }

    return (
        <Paper square elevation={0} css={styles.root}>
            <GlobalStyle/>
            <Navigation/>
            <div css={styles.page}>
                {props.children}
            </div>
            <Footer/>
        </Paper>
    )
}