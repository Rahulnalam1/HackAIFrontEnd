// App.js
import React from 'react';
import './App.css';
import StatBox from './components/statbox'; // Ensure this path matches your project structure
import Tasks from './components/tasks'; // Ensure this path matches your project structure

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-64 h-screen flex flex-col items-start pt-6 pl-6">
          <h1 className="text-white text-2xl mb-5">Bot Squad</h1>
          <button style={{
            marginTop: '75px',
            width: '184px',
            height: '48px',
            borderRadius: '24px',
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '5px',
          }}>
            <div style={{
              width: '37px',
              height: '37px',
              borderRadius: '50%',
              backgroundColor: '#E65F2B',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '29px',
              lineHeight: '35px',
              textAlign: 'center',
              position: 'relative',
            }}>
              +
            </div>
            <div style={{
              marginLeft: '10px',
              fontSize: '14px',
            }}>
              Add New User
            </div>
          </button>
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
        <div className="flex-grow" style={{ backgroundColor: '#EBDFD7', paddingLeft: '266px', paddingTop: '20px' }}>
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
            right: '230px', // Moved to the right by an additional 15px
            top: '20px',
            width: 'calc(100% - 296px)', // Adjusts width dynamically based on the viewport width
            maxWidth: '394px', // Ensures the search box does not exceed its intended maximum width
            height: '48px',
            borderRadius: '55px',
            border: '1px solid #ccc',
            paddingLeft: '15px',
          }} placeholder="Search..."/>
          {/* New Button */}
          <button style={{
            position: 'absolute',
            right: '20px', // Aligns with the right side of the container
            top: '20px',
            width: '195px',
            height: '48px',
            borderRadius: '24px',
            backgroundColor: 'white', // Background color set to white
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Text removed */}
          </button>
          {/* Placeholder for future content */}
        </div>
      </div>
    </div>
  );
}

export default App;
