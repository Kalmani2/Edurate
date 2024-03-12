import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/home/Home';
import Review from './Pages/submit_reviews/Review';
import NotFoundPage from './Pages/error/NotFoundPage';
import AboutUs from './Pages/about_us/AboutUs';

/* 
Notes
Download react-router-dom online 
Youtube setup guide: https://www.youtube.com/watch?v=oTIJunBa6MA
*/

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  errorElement: <NotFoundPage />
  },
  {
    path: '/Review',
    element: <Review />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
