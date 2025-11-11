import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        // This script URL is an example; replace it with the actual URL provided by your chatbot service.
        const script = document.createElement('script');
        script.src = 'https://path-to-your-chatbot-script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="chatbot"></div>;
};

export default Chatbot;
