import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { LandingPage } from '../Pages/LandingPage';
import { ReferralPage } from '../Pages/ReferralPage';
import { ServicePage } from '../Pages/ServicePage';
import { ServiceDetailsPage } from '../components/Services/ServicesDetailed';
import { AboutUsPage } from '../Pages/AboutUsPage';

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
        element: <div className="p-8">Contact Skeleton</div>, 
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
        element: <div> 4040 </div>
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};