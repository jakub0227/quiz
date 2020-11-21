import React, {FC} from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import * as colors from '@material-ui/core/colors'

export const Theme: FC = (props) => {
    return (
        <ThemeProvider theme={createMuiTheme({
            palette: {
                type: 'dark',
                primary: colors.deepPurple,
                // primary: {main: "#00ff00"},
            },
            props: {
                MuiTypography: {
                    gutterBottom: true
                }
            }
        })}>
            {props.children}
        </ThemeProvider>
    );
};