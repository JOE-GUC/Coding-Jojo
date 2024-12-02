import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Initialize to a default value

    useEffect(() => {
        // Access localStorage only in the client
        const isDarkModeSaved = localStorage.getItem('isDarkMode');
        if (isDarkModeSaved !== null) {
            setIsDarkMode(JSON.parse(isDarkModeSaved));
        }
    }, []);

    useEffect(() => {
        // Update the body class and localStorage when isDarkMode changes
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
