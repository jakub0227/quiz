/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React, {useEffect, useState} from 'react';
import {fetchQuizQuestions, Question} from "../../API/API";
import {QuestionCard} from "./QuestionCard/QuestionCard";
import useTheme from "@material-ui/core/styles/useTheme";
import {CircularProgress, Typography} from '@material-ui/core';
import {Route} from "../../types/Route";
import {EndQuizDialog} from "./EndQuizDialog/EndQuizDialog";
import {useUserMessage} from "../../hooks/useUserMessage";


export const QuizPage: Route = () => {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const TOTAL_QUESTIONS = 12;

    const theme = useTheme()
    const styles = {
        root: css`
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: ${theme.spacing(1.2)}px;
            align-items: center;
            margin-top: ${theme.spacing(5)}px;
            `,
        start: css` 
            max-width: 20px;
        `,
        quizHeader: css`
            text-align: center;
            justify-content: center;          
`
    }

    const resetQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        localStorage.removeItem("score")
        const newQuestions = await (async () => {
            if (localStorage.questions) {
                return JSON.parse(localStorage.questions)
            } else {
                const res = await fetchQuizQuestions(
                    TOTAL_QUESTIONS,
                    localStorage.difficulty
                );
                localStorage.questions = JSON.stringify(res)
                return res
            }
        })()
        setQuestions(newQuestions);
        setScore(0);
        setCurrentQuestionIndex(0);
        setLoading(false);
    };

    useEffect(() => {
        resetQuiz()
    }, [])

    const {message, setMessage} = useUserMessage()

    const nextQuestion = () => {
        if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
            setGameOver(true);
        } else {
            setCurrentQuestionIndex(prevState => prevState + 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex]

    const checkAnswer = (answer: string) => {
        const isCorrect = currentQuestion.correct_answer === answer
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }
        setMessage(`Odpowiedziałeś ${isCorrect ? '' : 'nie'}poprawnie`, {severity: isCorrect ? "success" : "error"})
        nextQuestion()
    };

    useEffect(() => {
        localStorage.score = +(localStorage.score || 0) + score;
    }, [gameOver])

    return (
        <div css={styles.root}>
            <Typography css={styles.quizHeader} variant='h4'>Try your knowledge and win prizes !</Typography>
            {loading && <CircularProgress/>}
            {!loading && (
                <QuestionCard
                    questionNr={currentQuestionIndex + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={currentQuestion.question}
                    answers={[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]}
                    checkAnswer={checkAnswer}
                />
            )}
            {message}
            {/*{!gameOver ? <Typography variant='h5'>Score: {score}</Typography> : null}*/}
            {gameOver && <EndQuizDialog action={resetQuiz} score={score}/>}
        </div>
    );
};

QuizPage.routeName = '/'
QuizPage.displayName = 'Quiz'

// w dialog nowy button po quizie ktory spyta nas czy chcesz nowy set pytan (nowy fetch [40 line])
