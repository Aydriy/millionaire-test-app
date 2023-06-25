import React, { FC } from 'react';
import './style.scss';
import { Container, TypographyComponent } from '../../ui-kit';
import { LinkButton } from '../../ui-kit/buttonsCollection';
import { PATH_QUIZ } from '../../constants/spa.routes';
import { useAppSelector } from '../../store';

type ResultPageType = {};
export const ResultPage: FC<ResultPageType> = () => {
  const { level, money } = useAppSelector((state) => state.uiReducer);
  return (
    <div className="result">
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div className="result_wrapper">
          <div className="result_wrapper-article">
            <TypographyComponent variant="Heading2">
              You Result
            </TypographyComponent>
          </div>
          <div className="result_info-wrapper">
            <TypographyComponent variant="Heading2">
              Level: {level}
            </TypographyComponent>
            <TypographyComponent variant="Heading2">
              Money: ${money}
            </TypographyComponent>
          </div>
          <LinkButton to={PATH_QUIZ.ROOT}>Play again</LinkButton>
        </div>
      </Container>
    </div>
  );
};
