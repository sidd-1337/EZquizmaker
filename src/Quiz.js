import React, { useState } from 'react';
import { Button, Container, Typography, Paper, Radio, RadioGroup, FormControlLabel, FormControl, Box } from '@mui/material';
import { Questions } from './Questions';

const allQuestions = Questions.getAllQuestions();

const getRandomQuestions = (questions, num) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const Quiz = () => {
    const [questions, setQuestions] = useState(getRandomQuestions(allQuestions));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleAnswerOptionClick = () => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
            setFeedback('Správně!');
            setTimeout(() => {
                const nextQuestion = currentQuestion + 1;
                if (nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
                    setSelectedAnswer('');
                    setFeedback('');
                } else {
                    setShowScore(true);
                }
            }, 1000); // Shorter delay for correct answer
        } else {
            setFeedback(`Špatně! Správná odpověď: ${questions[currentQuestion].answer}`);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer('');
            setFeedback('');
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setQuestions(getRandomQuestions(allQuestions, 10));
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer('');
        setFeedback('');
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
                {showScore ? (
                    <div>
                        <Typography variant="h4" component="h2">
                            Skóre: {score} z {questions.length} ({((score / questions.length) * 100).toFixed(2)}%)
                        </Typography>
                        <Box mt={2}>
                            <Button variant="contained" color="primary" onClick={resetQuiz}>
                                Začít znovu
                            </Button>
                        </Box>
                    </div>
                ) : (
                    <>
                        <Typography variant="h5" component="h3" gutterBottom>
                            Otázka {currentQuestion + 1}/{questions.length}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {questions[currentQuestion].question}
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup value={selectedAnswer} onChange={(e) => setSelectedAnswer(e.target.value)}>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Box mt={2}>
                            <Button variant="contained" color="primary" onClick={handleAnswerOptionClick} disabled={!selectedAnswer}>
                                Odpovědět
                            </Button>
                        </Box>
                        {feedback && (
                            <div>
                                <Typography variant="body1" color={feedback.startsWith('Správně') ? 'green' : 'red'} mt={2}>
                                    {feedback}
                                </Typography>
                                {feedback.startsWith('Špatně') && (
                                    <Box mt={2}>
                                        <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                                            Pokračovat
                                        </Button>
                                    </Box>
                                )}
                            </div>
                        )}
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default Quiz;
