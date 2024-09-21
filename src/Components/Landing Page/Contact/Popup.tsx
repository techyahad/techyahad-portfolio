import React from 'react';

interface PopupProps {
    userName: string;
    message: string; // Add message prop
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({  message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 font-serif flex justify-center items-center z-50">
            <div className="bg-gray-200 p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">Thank you for contacting!</h2>
                <p className="mb-6">{message}</p> 
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
