import React from 'react';
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import useTheme from "@material-ui/core/styles/useTheme";

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper: React.FC<ButtonWrapperProps> = (props) => {
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
