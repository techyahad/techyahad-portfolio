import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Landing Page/Hero/Navbar';
import Footer from '../Landing Page/Footer/Footer';

const Layout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
