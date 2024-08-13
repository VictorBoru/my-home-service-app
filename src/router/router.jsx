import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import UserProfile from '../pages/UserProfile';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SearchCategory from '../pages/SearchCategory';
import { ROUTES } from './consts';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT_US,
    element: <AboutUs />,
  },
  {
    path: ROUTES.USER_PROFILE,
    element: <UserProfile />,
  },
  {
    path: ROUTES.SERVICES,
    element: <Services />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SEARCH,
    element: <SearchCategory />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
