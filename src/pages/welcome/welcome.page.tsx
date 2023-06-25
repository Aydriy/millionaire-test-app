import { FC } from 'react';
import './style.scss';
import { TypographyComponent } from '../../ui-kit';
import { Container } from '../../ui-kit';
import { LinkButton } from '../../ui-kit/buttonsCollection';
import { ThumbUp } from '../../assets/icons/thumbUp';
import { COLORS } from '../../constants/colors';
import { PATH_QUIZ } from '../../constants/spa.routes';

export const WelcomePage: FC = () => {
  return (
    <div className="welcome diagonal-split">
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="welcome_wrapper">
          <div className="welcome_wrapper-thumb">
            <ThumbUp />
          </div>
          <div className="welcome_wrapper-article">
            <TypographyComponent variant="Heading1">
              Who wants to be a millionaire?
            </TypographyComponent>
            <LinkButton to={PATH_QUIZ.ROOT} className={'welcome_start-link'}>
              <TypographyComponent color={COLORS.WHITE_COLOR}>
                Start
              </TypographyComponent>
            </LinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
};
