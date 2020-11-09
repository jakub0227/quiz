import {Button, CircularProgress, Typography} from '@material-ui/core';
import React, {useState, FC} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionsState} from "../../components/API/API";
import {QuestionCard} from "../../components/QuestionCard/QuestionCard";
import useTheme from "@material-ui/core/styles/useTheme";
import {css} from "@emotion/core";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};
const TOTAL_QUESTIONS = 12;

export const StartQuizPage: FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const theme = useTheme()
    const styles = {
        start: css` 
        max-width: 20px;
        `,
    }


    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            // User's answer
            const answer = e.currentTarget.value;
            // Check answer | correct answer
            const correct = questions[number].correct_answer === answer;
            // Add +score if answer is correct
            if (correct) setScore((prev) => prev + 1);
            // Save the answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };
    const nextQuestion = () => {
        // Move on to the next question (if not the last question)
        const nextQ = number + 1;

        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQ);
        }
    };

    return (
        <>
            <div>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <Button fullWidth variant='contained' size='large' color='secondary' onClick={startQuiz}>
                        Start
                    </Button>
                ) : null}
                {!gameOver ? <Typography variant='h5' className='score'>Score: {score}</Typography> : null}
                {loading ? <Typography variant='h6' color='secondary'>Loading
                    Questions...<CircularProgress/></Typography> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                    <Button variant='contained' className='next' onClick={nextQuestion}>
                        Next Question
                    </Button>
                ) : null}
            </div>
        </>
    );
};

