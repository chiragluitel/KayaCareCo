import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { LandingPage } from '../Pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      {
        index: true, 
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <div className="p-8">About Us Skeleton</div>, 
      },
      {
        path: 'contact',
        element: <div className="p-8">Contact Skeleton</div>, 
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};