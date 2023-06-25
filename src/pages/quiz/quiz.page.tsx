import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import questionsJson from './questions.json';
import { Container, TypographyComponent } from '../../ui-kit';
import { QuizButton } from '../../ui-kit/buttonsCollection';
import { Sidebar } from './sidebar';
import { Answer, QuizStatusEnum } from '../../types/quiz.interface';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { PATH_RESULT } from '../../constants/spa.routes';
import { useDispatch } from 'react-redux';
import { setResultState } from '../../store/slices';
import { PrizeSteps } from '../../constants/prize.steps';
import { Burger } from '../../assets/icons/burger';
import { BurgerClose } from '../../assets/icons/burgerClose';

type QuizPage = {};
export const QuizPage: FC<QuizPage> = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedVariant, setSelectedVariant] = useState<Answer | null>(null);
  const [answerInterval, setAnswerInterval] = useState<boolean>(false);
  const [endAnswerInterval, setEndAnswerInterval] = useState<boolean>(false);
  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const burgerClickHandler = () => {
    setOpenSidebar((prevState) => !prevState);
  };

  const selectAnswerHandler = (variant: Answer) => {
    setSelectedVariant(variant);
  };

  const isRightAnswerSelected =
    selectedVariant?.variant ===
    questionsJson.questions[questionIndex].rightAnswer[0];

  const isRightAnswerStatus = isRightAnswer
    ? QuizStatusEnum.CORRECT
    : QuizStatusEnum.WRONG;

  const goToNextHandler = () => {
    dispatch(
      setResultState({
        level: questionsJson.questions[questionIndex].id,
        money: PrizeSteps[questionIndex - 1]?.prize ?? 0,
      })
    );
    setEndAnswerInterval(false);
    if (isRightAnswerSelected) {
      if (questionIndex + 1 < questionsJson.questions.length) {
        setQuestionIndex((prevState) => prevState + 1);
      } else {
        navigate(PATH_RESULT.ROOT);
      }
    } else {
      navigate(PATH_RESULT.ROOT);
    }
  };

  useEffect(() => {
    let timer: any;
    if (selectedVariant) {
      timer = setInterval(() => {
        setAnswerInterval((prevState) => !prevState);
      }, 500);
      setTimeout(() => {
        clearTimeout(timer);
        setIsRightAnswer(isRightAnswerSelected);
        setEndAnswerInterval(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [selectedVariant]);

  useEffect(() => {
    if (endAnswerInterval) {
      setTimeout(() => {
        goToNextHandler();
        setSelectedVariant(null);
      }, 2000);
    }
  }, [endAnswerInterval]);

  return (
    <div className="quiz">
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div className="quiz_wrapper">
          <div className="quiz_wrapper-article">
            <TypographyComponent variant="Heading2">
              {questionsJson.questions[questionIndex].question}
            </TypographyComponent>
          </div>
          <div className="quiz_wrapper-questions">
            <div className="quiz_wrapper-questions-container">
              {questionsJson.questions[questionIndex].answers.map(
                (el: Answer, index) => {
                  const selectedVariantView =
                    answerInterval && selectedVariant?.answer === el.answer
                      ? QuizStatusEnum.SELECTED
                      : QuizStatusEnum.DEFAULT;

                  const isCorrectVariant =
                    selectedVariant?.answer === el.answer
                      ? isRightAnswerStatus
                      : QuizStatusEnum.DEFAULT;

                  return (
                    <QuizButton
                      style={{ display: 'flex', alignItems: 'center' }}
                      key={index}
                      onClick={() => selectAnswerHandler(el)}
                      disable={!!selectedVariant}
                      status={
                        endAnswerInterval
                          ? isCorrectVariant
                          : selectedVariantView
                      }
                    >
                      <TypographyComponent
                        variant="PLite"
                        color={COLORS.NEON_CARROT_COLOR}
                        style={{ marginRight: '10px' }}
                      >
                        {el.variant.toUpperCase()}
                      </TypographyComponent>
                      {el.answer}
                    </QuizButton>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="quiz-burger-menu-wrapper" onClick={burgerClickHandler}>
          {openSidebar ? <BurgerClose /> : <Burger />}
        </div>
      </Container>
      <Sidebar currentQuestion={questionIndex} openSidebar={openSidebar} />
    </div>
  );
};
