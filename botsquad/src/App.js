import React from 'react';
import './App.css';
import RahulImage from './rahul.png'; // Corrected the path to match the case sensitivity
import IconImage from './Icon.png'; // Assuming the icon image is in the root of the project folder
import StatImage from './stat.png';
import ClockImage from './clock.png';
import PersonImage from './person.png';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-64 h-screen flex flex-col items-start pt-6 pl-6 justify-between">
          <div>
            {/* Bot Squad title adjusted to align with the bottom axis of the Dashboard title */}
            <h1 className="text-white text-2xl" style={{ position: 'absolute', top: '32px', left: '6px' }}>Bot Squad</h1>
            {/* Existing Add New User Button */}
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
          {/* New Circle Button at the bottom left with Icon */}
          <button style={{
            marginBottom: '20px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#E65F2B',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src={IconImage} alt="Icon" style={{
              width: '24px', // Adjust size as needed
              height: '24px', // Adjust size as needed
            }}/>
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
            right: '230px',
            top: '20px',
            width: 'calc(100% - 296px)',
            maxWidth: '394px',
            height: '48px',
            borderRadius: '55px',
            border: '1px solid #ccc',
            paddingLeft: '15px',
          }} placeholder="Search..."/>
          {/* New Button with Rahul.png as a circle */}
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
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '10px',
          }}>
            <img src={RahulImage} alt="Rahul" style={{
              width: '38px',
              height: '38px',
              marginRight: '1px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}/>
            <div style={{
              marginLeft: '10px',
              position: 'relative',
              top: '1px',
            }}>
              <div style={{ fontSize: '14px' }}>
                Rahul Nalam
              </div>
              <div style={{
                color: '#292D32',
                fontSize: '12px',
                marginLeft: '-10px'
              }}>
                Homeowner
              </div>
            </div>
          </button>
          {/* Overview Text */}
          <div style={{
            position: 'absolute',
            left: '266px',
            top: '110px', // 95px (line's top) + 15px
            fontSize: '25px',
            fontWeight: '400',
            color: '#000606',
          }}>
            Overview
          </div>
          {/* Overview Boxes Section */}
          <div style={{
            position: 'absolute',
            left: '266px',
            top: '165px', // Moved up by 5px from '175px'
            display: 'flex',
            flexWrap: 'wrap', // Added to handle overflow by wrapping boxes to the next line if needed
            justifyContent: 'flex-start', // Changed from 'space-between' to 'flex-start'
            width: 'calc(100% - 266px)', // Adjusted to match the left offset
          }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} style={{
                width: '341px', // You can adjust this width as needed
                height: '215px',
                backgroundColor: 'rgba(255, 255, 255, 0.34)',
                borderRadius: '14px',
                boxShadow: `0 0 0 1px #EBDFD7`,
                marginRight: '20px', // Consistent spacing for all boxes
                marginBottom: '20px', // Added to handle vertical spacing when boxes wrap to the next line
                position: 'relative', // Added to position the circle absolutely within the box
              }}>
                {/* Circle at the top left of each box with specific colors for each */}
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#D398E7' : 
                                   index === 1 ? '#E89271' : 
                                   index === 2 ? '#70A1E5' : 
                                   '#F0C274', // Last circle with #F0C274 color
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  {index === 0 && <img src={StatImage} alt="Stat" style={{ width: '24px', height: '24px' }}/>}
                  {index === 2 && <img src={ClockImage} alt="Clock" style={{ width: '24px', height: '24px' }}/>}
                  {index === 3 && <img src={PersonImage} alt="Person" style={{ width: '24px', height: '24px' }}/>}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute',
            left: '266px',
            top: '395px', // Adjusted for spacing
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: 'calc(100% - 266px)',
          }}>
            <div style={{
              width: '872px', // Adjusted to span two boxes and half of the third
              height: '400px', // Height increased by 30px
              backgroundColor: 'rgba(255, 255, 255, 0.34)',
              borderRadius: '14px',
              boxShadow: `0 0 0 1px #EBDFD7`,
              marginBottom: '15px',
              position: 'relative',
            }}>
              {/* Content inside the new box can be added here */}
            </div>
          </div>
          {/* Adjusted New Box with specified requirements */}
          <div style={{
            position: 'absolute',
            left: '1158px', // Starts 20px after the big box
            top: '395px', // Positioned at the same top as specified before
            width: '532px', // Corrected width to ensure it aligns with the end of the fourth small box
            height: '400px', // Specified height
            backgroundColor: 'rgba(255, 255, 255, 0.34)', // Matching the beige color
            borderRadius: '14px', // Matching the corner radius
            boxShadow: `0 0 0 1px #EBDFD7`, // Matching the shadow
            marginBottom: '15px', // Specified gap
          }}>
            {/* Content inside the new box can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
