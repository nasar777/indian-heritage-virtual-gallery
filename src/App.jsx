// App.jsx — root component with routing and layout

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import VirtualMuseum from './pages/VirtualMuseum';


// Hides Navbar on the full-screen museum page
function NavbarWrapper() {
  const location = useLocation();

  return location.pathname === '/museum' ? null : <Navbar />;
}

function AppRoutes() {
  return (
    <>
      <NavbarWrapper />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
     

        {/* Virtual Museum */}
        <Route
          path="/museum"
          element={<VirtualMuseum />}
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}