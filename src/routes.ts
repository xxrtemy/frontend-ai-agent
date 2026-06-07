import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: App,
  },
  {
    path: '/feedback',
    element: FeedbackPage,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;