import React, { useEffect, useState, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';


    //const [text, setText] = useState('');

const TeachableMachineComponent = () => {
    const [lockStatus, setLockStatus] = useState('LOCKED');
    const [recognizedPerson, setRecognizedPerson] = useState('');
    const [lastRecognizedPerson, setLastRecognizedPerson] = useState(''); // Track the last recognized person
    const webcamRef = useRef(null);
    const modelURL = "https://teachablemachine.withgoogle.com/models/mOuUpj6nx/model.json";
    const metadataURL = "https://teachablemachine.withgoogle.com/models/mOuUpj6nx/metadata.json";

    // Function to send text message
    const sendText = (recipient ,person) => {
        // Example fetch logic
        //const recipient = 'your-recipient-number'; // Placeholder
        const textMessage = `Access Granted to ${person}`;

        fetch(`http://127.0.0.1:4000/send-text?recipient=${recipient}&textmessage=${textMessage}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => console.log('Message sent:', data))
            .catch(err => console.error('Fetch error:', err));
    };

    useEffect(() => {
        let webcam;

        const init = async () => {
            const model = await tmImage.load(modelURL, metadataURL);
            webcam = new tmImage.Webcam(600, 400, true);
            await webcam.setup();
            await webcam.play();
            webcamRef.current.innerHTML = '';
            webcamRef.current.appendChild(webcam.canvas);
            webcam.canvas.classList.add('rounded-xl');

            const loop = async () => {
                webcam.update();
                await predict();
                requestAnimationFrame(loop);
            };

            const predict = async () => {
                const prediction = await model.predict(webcam.canvas);
                const highProbPrediction = prediction.find(p => p.probability > 0.9 && (p.className === "Krish" || p.className === "Vraj" || p.className === "Unknown"));

                if (highProbPrediction && recognizedPerson !== highProbPrediction.className && highProbPrediction.className !== "Unknown") {
                    setLockStatus('UNLOCKED');
                    setRecognizedPerson(highProbPrediction.className);
                    // Send text only if the recognized person has changed
                    if (lastRecognizedPerson !== highProbPrediction.className) {
                        
                        setLastRecognizedPerson(highProbPrediction.className); // Update the last recognized person
                    }
                } else if (!highProbPrediction) {
                    setLockStatus('LOCKED');
                    setRecognizedPerson('');
                }
            };

            loop();
        };

        init();

        return () => {
            if (webcam && webcam.getTracks) {
                webcam.getTracks().forEach(track => track.stop());
            }
        };
    }, [recognizedPerson, lastRecognizedPerson]); // Depend on recognizedPerson and lastRecognizedPerson to control effect

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Teachable Machine Image Model</h1>
                <div ref={webcamRef} id="webcam-container" className="inline-block"></div>
                <div id="label-container" className="space-y-2 mt-4">
                    {lockStatus === 'UNLOCKED' && recognizedPerson ? (
                        <>
                            <div className="text-lg text-green-500 font-medium">
                                {`UNLOCKED: Welcome, ${recognizedPerson}!`}
                            </div>
                            <button 
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                                
                                onClick={sendText()}>
                                Notify Homeowner
                            </button>
                        </>
                    ) : (
                        <div className="text-lg text-red-500">
                            {lockStatus}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeachableMachineComponent;

//onClick={sendText(recognizedPerson)}