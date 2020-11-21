/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React from 'react';
import useTheme from "@material-ui/core/styles/useTheme";

export const ButtonWrapper: React.FC = (props) => {
        const theme = useTheme()
        const styles = {
            root: css`
            width: 100%;
            padding: ${theme.spacing(1.2)}px;
            transition: all 0.3s ease;
        `,
        }
        return (
            <div css={styles.root}>
                {props.children}
            </div>
        );
    }
;
