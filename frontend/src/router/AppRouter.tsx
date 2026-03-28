import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { LandingPage } from '../Pages/LandingPage';
import { ReferralPage } from '../Pages/ReferralPage';
import { ServicePage } from '../Pages/ServicePage';
import { ServiceDetailsPage } from '../components/Services/ServicesDetailed';
import { AboutUsPage } from '../Pages/AboutUsPage';
import { ContactUsPage } from '../Pages/ContactUsPage';
import { NotFoundPage } from '../Pages/NotFoundPage';

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
        element: <AboutUsPage />, 
      },
      {
        path: 'contact',
        element: <ContactUsPage />, 
      },
      {
        path: 'referrals',
        element: <ReferralPage />
      },
      {
        path:'services',
        element: <ServicePage />
      },
      {
        path:'services/:serviceId',
        element: <ServiceDetailsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};