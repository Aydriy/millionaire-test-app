export enum QuizStatusStepEnum {
  CURRENT = 'current',
  FINISHED = 'finished',
  DEFAULT = 'default',
}
export enum QuizStatusEnum {
  SELECTED = 'selected',
  CORRECT = 'correct',
  WRONG = 'wrong',
  DEFAULT = 'default',
}

export interface IQuestions {
  id: number;
  question: string;
  answers: Answer[];
  rightAnswer: string[];
}

export interface Answer {
  variant: string;
  answer: string;
}

export interface IPrizeSteps {
  step: number;
  prize: number;
}
