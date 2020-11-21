/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React, {FC} from 'react';
import Paper from "@material-ui/core/Paper";
import useTheme from "@material-ui/core/styles/useTheme";
import {Typography} from "@material-ui/core";

export const Footer: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            width: 100%;
            padding: ${theme.spacing(1.2)}px;
        `,
    }

    return (
        <Paper square elevation={8} css={styles.root} component='footer'>
            <Typography align='center' variant='subtitle1'>
                (C) Copyright {new Date().getFullYear()}
            </Typography>
        </Paper>
    );
};