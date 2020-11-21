/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import {ButtonGroup, Card, Typography, useTheme} from '@material-ui/core';
import React from 'react';
import {Route} from "../../types/Route";
import {Link} from "react-router-dom";
import {QuizPage} from "../QuizPage/QuizPage";
import Button from "@material-ui/core/Button";

export const PRIZE_FOR_ONE_CORRECT_ANSWER = 500

export const PrizesPage: Route = () => {
    const theme = useTheme();
    const styles = {
        root: css`
            width: 100%;
            margin-top: ${theme.spacing(10)}px;
            padding: ${theme.spacing(3)}px;
            display: flex;
            flex-direction: column;
            align-items: center;                                     
        `,
        prizeWrapper: css`
            display: flex;
            flex-direction: column;                  
            align-items: center;            
            max-width: 100%;          
            border-radius: 15px;
            border: 2px solid ${theme.palette.primary.main};          
            box-shadow: 0 5px 10px rgba(0,0,0,0.25);
            padding: ${theme.spacing(3)}px;            
        `,
        prizeText: css`
            margin-top: ${theme.spacing(1)}px;
            margin-bottom: ${theme.spacing(1)}px;
            text-align: center;
        `
    }


    const scoreLS = +(localStorage.getItem("score") || 0)
    const scoreValue: number = scoreLS * PRIZE_FOR_ONE_CORRECT_ANSWER

    return (
        <div css={styles.root}>
            <Card css={styles.prizeWrapper}>
                <Typography variant='h4' css={styles.prizeText}>
                    You have scored {scoreLS} correct answers !
                    <Typography variant='h5' css={styles.prizeText}>
                        You have won {scoreValue} prize in USD $
                    </Typography>
                </Typography>
                <ButtonGroup fullWidth>
                    <Button component={Link} to={QuizPage.routeName} color="primary" variant="contained"
                            size="large">
                        Try Again ?
                    </Button>
                </ButtonGroup>
            </Card>
        </div>
    );
};
PrizesPage.routeName = '/prizes'
PrizesPage.displayName = 'Prizes'