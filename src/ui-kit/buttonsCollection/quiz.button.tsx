import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';

type QuizButtonProps = {
  children: React.ReactNode;
  status?: 'selected' | 'correct' | 'wrong' | 'default';
  statusStep?: 'finished' | 'current' | 'default';
  isStepButton?: boolean;
  disable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};
export const QuizButton: FC<QuizButtonProps> = ({
  children,
  status = 'default',
  isStepButton = false,
  onClick = () => {},
  style,
  disable,
}) => (
  <div
    className={classNames(
      'button-quiz',
      isStepButton && 'button-quiz-steps',
      `quiz-status-${status}`
    )}
    onClick={disable ? () => {} : onClick}
  >
    <span
      className={classNames(
        'button-quiz_left',
        isStepButton && 'button-quiz_left-steps',
        `quiz-status-${status}`
      )}
    ></span>
    <div
      className={classNames(
        'button-quiz_content',
        isStepButton && 'button-quiz_content-steps',
        `quiz-status-${status}`
      )}
      style={style}
    >
      {children}
    </div>
    <span
      className={classNames(
        'button-quiz_right',
        isStepButton && 'button-quiz_right-steps',
        `quiz-status-${status}`
      )}
    ></span>
  </div>
);
