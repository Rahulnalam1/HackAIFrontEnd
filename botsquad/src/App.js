// App.js
import React from 'react';
import './App.css';
import StatBox from './components/statbox'; // Make sure this path matches your project structure
import Tasks from './components/tasks'; // Make sure this path matches your project structure
import Appearances from './components/appearances'; // Make sure this path matches your project structure

function App() {
  return (
    <div className="App" style={{ position: 'relative', backgroundColor: '#EBDFD7' }}>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-64 h-screen flex flex-col items-start pt-6 pl-6">
          <h1 className="text-white text-2xl mb-5">Bot Squad</h1>
          {/* Sidebar Button */}
          {/* ... */}
        </div>

        {/* Horizontal Line */}
        <div style={{
          position: 'absolute',
          top: '95px',
          left: '256px',
          right: 0,
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }}></div>

        {/* Main Content Area */}
        <div className="flex-grow" style={{ paddingLeft: '266px', paddingTop: '20px' }}>
          {/* Dashboard Title */}
          <h1 style={{
            position: 'absolute',
            left: '266px',
            top: '20px',
            color: '#000606',
            fontSize: '32px',
            fontWeight: '500',
          }}>
            Dashboard
          </h1>

          {/* Search Box */}
          <input style={{
            position: 'absolute',
            right: '230px',
            top: '20px',
            width: 'calc(100% - 296px)',
            maxWidth: '394px',
            height: '48px',
            borderRadius: '55px',
            border: '1px solid #ccc',
            paddingLeft: '15px',
          }} placeholder="Search..." />

          {/* New Button */}
          <button style={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            width: '195px',
            height: '48px',
            borderRadius: '24px',
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Button Content */}
          </button>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* StatBox Components */}
            {/* ... */}
          </div>

          {/* Task and Appearances Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tasks Component */}
            <div className="col-span-1">
              <Tasks />
            </div>

            {/* Appearances Component */}
            <div className="col-span-1">
              <Appearances />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
