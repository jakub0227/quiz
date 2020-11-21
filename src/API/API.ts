export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

type Difficulty = 'easy' | 'medium' | 'hard'

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<Question[]> => {
    const API_ENDPOINT = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(API_ENDPOINT)).json();
    return data.results as Question[]
};