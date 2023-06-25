import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from 'layouts';
import { QuizPage, WelcomePage } from 'pages';
import { ResultPage } from '../pages/result/result.page';

export const routes = createBrowserRouter([
  {
    path: '/millionaire-test-app',
    element: <AppLayout />,
    children: [
      { path: '', element: <WelcomePage /> },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
    ],
  },
  { path: '*', element: <h1>Not found page</h1> },
]);
