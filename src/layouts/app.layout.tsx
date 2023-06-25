import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

type AppLayoutProps = {};
export const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <div className="wrapper">
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
