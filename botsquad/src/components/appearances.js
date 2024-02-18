// Appearances.js
import React from 'react';

const appearancesData = [
    { name: 'Vraj', appearances: 4 },
    { name: 'Krish', appearances: 8 },
    { name: 'Rahul', appearances: 2 },
];

const MaxAppearances = Math.max(...appearancesData.map(data => data.appearances)); // Find the highest number of appearances

const AppearancesBar = ({ name, appearances }) => {
    // Calculate the height as a percentage of the max height
    const barHeightPercentage = (appearances / MaxAppearances) * 100;
    const barStyle = {
        height: `${barHeightPercentage}%`, // Set the height as a percentage
        minHeight: '20px', // Minimum height for visibility
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-semibold">{appearances}</div>
            <div
                className="bg-blue-500 rounded w-8"
                style={barStyle}
            ></div>
            <div className="text-xs mt-1">{name}</div>
        </div>
    );
};

const Appearances = () => {
    return (
        <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Appearances Summary</h2>
            <div className="flex justify-evenly items-end" style={{ height: '200px' }}> {/* Fixed container height */}
                {appearancesData.map(person => (
                    <AppearancesBar key={person.name} name={person.name} appearances={person.appearances} />
                ))}
            </div>
        </div>
    );
};

export default Appearances;
