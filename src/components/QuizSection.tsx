import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CircleCheck, CircleX } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qui est considéré comme le père de l'algèbre ?",
    options: ["Ibn Sina", "Al-Khawarizmi", "Al-Farabi", "Ibn Rushd"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Quel savant a écrit le 'Canon de la médecine' ?",
    options: ["Ibn Sina", "Al-Khawarizmi", "Al-Farabi", "Ibn Rushd"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Qui était surnommé le 'Second Maître' après Aristote ?",
    options: ["Ibn Sina", "Al-Khawarizmi", "Al-Farabi", "Ibn Rushd"],
    correctAnswer: 2
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const playCorrectSound = () => {
    const audio = new Audio('/correct-answer.mp3');
    audio.play();
  };

  const playIncorrectSound = () => {
    const audio = new Audio('/incorrect-answer.mp3');
    audio.play();
  };
  
  const handleAnswerClick = (selectedAnswer: number) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      playCorrectSound();
      toast({
        title: "Bonne réponse !",
        description: "Continuez ainsi !",
        duration: 2000,
      });
    } else {
      playIncorrectSound();
      toast({
        title: "Pas tout à fait...",
        description: "Essayez encore !",
        duration: 2000,
      });
    }
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-hikma-accent">
          Quiz des Savants
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showScore ? (
          <div className="text-center">
            <h3 className="text-xl text-hikma-sand mb-4">
              Score: {score} sur {questions.length}
            </h3>
            <Button 
              onClick={handleRestart}
              className="bg-hikma-accent hover:bg-hikma-accent/80"
            >
              Recommencer le quiz
            </Button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg text-white mb-4">
              Question {currentQuestion + 1}/{questions.length}
            </h3>
            <p className="text-hikma-sand text-xl mb-6">
              {questions[currentQuestion].question}
            </p>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full text-left bg-hikma-secondary/50 hover:bg-hikma-secondary flex items-center gap-2"
                >
                  {index === questions[currentQuestion].correctAnswer ? (
                    <CircleCheck className="h-5 w-5" />
                  ) : (
                    <CircleX className="h-5 w-5" />
                  )}
                  {option}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizSection;
