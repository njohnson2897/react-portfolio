import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
            path: 'resume',
            element: <Resume />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}  />);