import React, { useState, useEffect } from 'react';

function Notification1() {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        // Show the notification after 3 seconds of visit
        const showTimer = setTimeout(() => {
            setShowNotification(true);
        }, 3000);

        // Hide the notification after 3 seconds of showing it
        const hideTimer = setTimeout(() => {
            setShowNotification(false);
        }, 18000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div
            id="toast-message-cta"
            className={`animate-fade-left animate-twice animate-duration-[5500ms] animate-ease-out animate-alternate animate-fill-both 
            fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-gray-950 divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 
            ${showNotification ? 'block' : 'hidden'
                }`}
            role="alert"
        >
            <div class="flex">
                <img class="w-8 h-8 rounded-full shadow-lg" src="./ceo.jpeg" alt="Nezar Simh Image" />
                <div class="ml-3 text-sm font-normal">
                    <span class="mb-1 text-sm font-semibold text-gray-100 dark:text-white">Nezar From NextierLab</span>
                    <div class="mb-2 text-sm font-normal text-left">Welcome to our platform! 🎉 We're thrilled to have you here.<br></br>Take our survey to enhance your experience!</div>
                    <a href="https://www.surveymonkey.com/r/5QQRNDC" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800" target="_blank" rel="noopener noreferrer">Share your thoughts</a>
                </div>
            </div>
        </div>
    );
}

export default Notification1;
