/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React from 'react';
import {Card, CardContent, Typography, Button, Container, LinearProgress, lighten, darken,} from "@material-ui/core";
import {ButtonWrapper} from "./ButtonWrapper/ButtonWrapper";
import useTheme from "@material-ui/core/styles/useTheme";

type QuestionCardProps = {
    question: string;
    answers: string[];
    checkAnswer: (answer: string) => void;
    questionNr: number;
    totalQuestions: number;
};
export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
    const theme = useTheme()
    const styles = {
        root: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: ${theme.spacing(10)} px;
        `,
        wrapper: css`
          max-width: 1100px;          
          border-radius: 15px;
          border: 2px solid ${theme.palette.primary.main};          
          box-shadow: 0 5px 10px rgba(0,0,0,0.25);
          text-align: center;          
        `,
        button: css`
          cursor: pointer;
          user-select: none;
          font-size: 0.75rem;
          width: min(500px, 80vw);
          margin: ${theme.spacing(5)}px, 0;
          border: 3px solid ${theme.palette.common.white};
          box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
          border-radius: 25px;
          color: ${theme.palette.common.white};
        `,
        progressBar: css`
          height: 35px;
          margin-bottom: ${theme.spacing(2)}px;
        `
    }
    const progressBarValue = (props.questionNr - 1) / (props.totalQuestions - 1) * 100

    return (
        <Container css={styles.root}>
            <Card css={styles.wrapper}>
                <LinearProgress value={progressBarValue} variant="determinate" css={styles.progressBar}/>
                <Typography variant='h5'>
                    Question: {props.questionNr} / {props.totalQuestions}
                </Typography>
                <Typography>{props.question}</Typography>
                <CardContent>
                    {props.answers.map((answer) => (
                        <ButtonWrapper
                            key={answer}>
                            <Button variant='contained' color='primary' css={styles.button}
                                    onClick={() => props.checkAnswer(answer)}>
                                <Typography>{answer}</Typography>
                            </Button>
                        </ButtonWrapper>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}

