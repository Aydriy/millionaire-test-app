import { QuizStatusStepEnum } from '../types/quiz.interface';

interface GetQuizStatusHelperProps {
  questionIndex: number;
  currentQuestion: number;
}

const getQuizStatusHelper = ({
  questionIndex,
  currentQuestion,
}: GetQuizStatusHelperProps): QuizStatusStepEnum => {
  if (questionIndex === currentQuestion) {
    return QuizStatusStepEnum.CURRENT;
  } else if (questionIndex < currentQuestion) {
    return QuizStatusStepEnum.FINISHED;
  } else {
    return QuizStatusStepEnum.DEFAULT;
  }
};

export { getQuizStatusHelper };
