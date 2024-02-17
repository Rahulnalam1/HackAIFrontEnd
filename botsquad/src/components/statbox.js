// StatBox.js
import React from 'react';

const StatBox = ({ title, value, delta, deltaType }) => {
    const deltaColor = deltaType === 'increase' ? 'text-green-500' : 'text-red-500';

    return (
        <div className="p-4 border rounded shadow-lg flex flex-col justify-between w-67 md:w-67 h-49">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${deltaColor}`}>{deltaType === 'increase' ? '▲' : '▼'} {delta}</p>
        </div>
    );
};

export default StatBox;
