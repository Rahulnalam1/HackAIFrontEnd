import React from 'react';
import './App.css';
import StatBox from './components/statbox';

function App() {
  return (
    <div className="App">
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-20 h-screen"> {/* Adjust width as needed */}
          {/* Sidebar content */}
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox
              title="Total Users"
              value="$53,00989"
              delta="2% increase from last month"
              deltaType="increase"
            />
            <StatBox
              title="Last User Detected"
              value="95/100"
              delta="10% decrease from last month"
              deltaType="decrease"
            />
            <StatBox
              title="User Contact"
              value="1022/1300 Hrs"
              delta="8% increase from last month"
              deltaType="increase"
            />
            <StatBox
              title="Resources"
              value="101/120"
              delta="2% increase from last month"
              deltaType="increase"
            />
          </div>
          {/* Placeholder for future content */}
        </div>
      </div>
    </div>
  );
}

export default App;
