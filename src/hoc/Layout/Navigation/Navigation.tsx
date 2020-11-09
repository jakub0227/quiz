import React from "react";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import {useTheme} from "@material-ui/core";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

import {NavigationItems} from "./NavigationItems/NavigationItems";

export const Navigation = () => {
    const theme = useTheme();
    const styles = {
        root: css`
      margin-right: ${theme.spacing(2)} px;
    `,
        title: css`
      flex-grow: 1;
    `,
    };

    return (
        <AppBar css={styles.root} position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" css={styles.title}>
                    Your Personal: Quiz App
                </Typography>
                <NavigationItems/>
            </Toolbar>
        </AppBar>
    );
};
