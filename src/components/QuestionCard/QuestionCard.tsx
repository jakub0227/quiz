import React from 'react';
import {AnswerObject} from "../../Pages/StartQuizPage/StartQuizPage";
import {Card, CardContent, Typography, Button,} from "@material-ui/core";
import {ButtonWrapper} from "./ButtonWrapper";
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import useTheme from "@material-ui/core/styles/useTheme";


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};
export const QuestionCard: React.FC<Props> = ({
                                                  question,
                                                  answers,
                                                  callback,
                                                  userAnswer,
                                                  questionNr,
                                                  totalQuestions,
                                              }) => {
    const theme = useTheme()
    const styles = {
        root: css`
display: flex;
flex-direction: column;
align-items: center;
`,
        wrapper: css`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0000d2;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`,
        button: css`
  cursor: pointer;
  user-select: none;
  font-size: 0.75rem;
  width:100%;
  height: 40px;
  margin: ${theme.spacing(5)}px, 0;
  border: 3px solid #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)  
`
    }

    return (
        <div css={styles.root}>
            <Card css={styles.wrapper}>
                <Typography variant='h5' className='number'>
                    Question: {questionNr} / {totalQuestions}
                </Typography>
                <Typography dangerouslySetInnerHTML={{__html: question}}/>
                <CardContent>
                    {answers.map((answer) => (
                        <ButtonWrapper
                            key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <Button variant='contained' color='primary' css={styles.button}
                                    disabled={userAnswer ? true : false}
                                    value={answer}
                                    onClick={callback}>
                                <Typography dangerouslySetInnerHTML={{__html: answer}}/>
                            </Button>
                        </ButtonWrapper>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}

