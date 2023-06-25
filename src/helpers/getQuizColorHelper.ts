import { QuizStatusStepEnum } from '../types/quiz.interface';
import { COLORS } from '../constants/colors';

const getQuizColorHelper = (status: string) => {
  if (QuizStatusStepEnum.CURRENT === status) {
    return COLORS.NEON_CARROT_COLOR;
  } else if (QuizStatusStepEnum.FINISHED === status) {
    return COLORS.MISCHKA_COLOR;
  } else {
    return COLORS.SHARK_COLOR;
  }
};

export { getQuizColorHelper };
