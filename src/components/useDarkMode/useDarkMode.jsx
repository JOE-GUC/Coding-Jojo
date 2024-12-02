import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const isDarkModeSaved = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(isDarkModeSaved ? JSON.parse(isDarkModeSaved) : false);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;



