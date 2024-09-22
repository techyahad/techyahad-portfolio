import React from 'react';
import './Style.css';

const Loader: React.FC = () => {
    return (
        <div className="loader-container flex items-center justify-center h-screen">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
