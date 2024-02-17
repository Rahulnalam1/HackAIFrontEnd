// App.js
import React from 'react';
import './App.css';
import StatBox from './components/statbox'; // Ensure this path matches your project structure
import Tasks from './components/tasks'; // Ensure this path matches your project structure

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-20 h-screen"></div>

        {/* Main Content */}
        <div className="flex-grow p-8">
          {/* StatBoxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatBox title="Total Users" value="$53,00989" delta="2% increase from last month" deltaType="increase" />
            <StatBox title="Last User Detected" value="95/100" delta="10% decrease from last month" deltaType="decrease" />
            <StatBox title="User Contact" value="1022/1300 Hrs" delta="8% increase from last month" deltaType="increase" />
            <StatBox title="Resources" value="101/120" delta="2% increase from last month" deltaType="increase" />
          </div>

          {/* Additional Content Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Today's Tasks - occupies left side on medium screens and up */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
              <Tasks />
            </div>

            {/* Placeholder for future content - occupies right side on medium screens and up */}
            <div>
              {/* Future content goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
