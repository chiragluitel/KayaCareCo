import { Outlet } from 'react-router-dom';
import { Navbar } from '../NavBar/Navbar';
import { Footer } from '../Footer/Footer';

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};