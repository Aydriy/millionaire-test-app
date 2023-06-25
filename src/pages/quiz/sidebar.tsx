import React, { FC } from 'react';
import './style.scss';
import { getQuizColorHelper } from '../../helpers/getQuizColorHelper';
import { Container, TypographyComponent } from '../../ui-kit';
import { QuizButton } from '../../ui-kit/buttonsCollection';
import { PrizeSteps } from '../../constants/prize.steps';
import { IPrizeSteps, QuizStatusEnum } from '../../types/quiz.interface';
import { getQuizStatusHelper } from '../../helpers/getQuizStatusHelper';
import classNames from 'classnames';

interface SidebarProps {
  currentQuestion: number;
  openSidebar: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ currentQuestion, openSidebar }) => {
  return (
    <div className={classNames('sidebar', openSidebar && 'sidebar-visible')}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto',
          overflowX: 'hidden',
          flexDirection: 'column-reverse',
          gap: '10px',
          margin: '0',
        }}
      >
        <div className="sidebar_wrapper">
          {PrizeSteps.map((item: IPrizeSteps) => {
            return (
              <QuizButton
                key={item.step}
                isStepButton
                status={
                  currentQuestion + 1 === item.step
                    ? QuizStatusEnum.SELECTED
                    : QuizStatusEnum.DEFAULT
                }
                statusStep={getQuizStatusHelper({
                  questionIndex: item.step,
                  currentQuestion: currentQuestion + 1,
                })}
              >
                <TypographyComponent
                  color={getQuizColorHelper(
                    getQuizStatusHelper({
                      questionIndex: item.step,
                      currentQuestion: currentQuestion + 1,
                    })
                  )}
                >
                  ${item.prize}
                </TypographyComponent>
              </QuizButton>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
