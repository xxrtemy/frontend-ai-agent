import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import ProfilePage from './pages/ProfilePage';
import App from './App';

// Явно указываем типы для роутеров
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Возвращаемся к использованию JSX
  },
  {
    path: '/feedback',
    element: <FeedbackPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]); // Может помочь обойти ошибку

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;