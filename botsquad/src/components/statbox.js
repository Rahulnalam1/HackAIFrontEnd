// StatBox.js
import React from 'react';

const StatBox = ({ title, value, delta, deltaType }) => {
    const deltaColor = deltaType === 'increase' ? 'text-green-500' : 'text-red-500';
    const bgColor = deltaType === 'increase' ? 'bg-green-100' : 'bg-red-100';

    return (
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className={`p-4 ${bgColor}`}>
                <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            </div>
            <div className="flex-grow p-4">
                <p className="text-3xl font-bold text-gray-800">{value}</p>
                <p className={`text-sm ${deltaColor} mt-2`}>{deltaType === 'increase' ? '▲' : '▼'} {delta}</p>
            </div>
        </div>
    );
};

export default StatBox;
