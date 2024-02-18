// App.js
import React, { useState } from 'react';
import './App.css';
import RahulImage from './rahul.png'; // Corrected the path to match the case sensitivity
import IconImage from './Icon.png'; // Assuming the icon image is in the root of the project folder
import MyChatbot from './components/chatbot'; // Adjust the import path as necessary

function App() {

  // State to toggle chatbot visibility
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isNewUserFormVisible, setIsNewUserFormVisible] = useState(false);

  // Function to toggle chatbot visibilityß
  const toggleChatbot = () => {
    console.log("Clicked", isChatbotVisible)
    setIsChatbotVisible(!isChatbotVisible);
    <MyChatbot isVisible={isChatbotVisible} />
  };

  const toggleNewUserForm = () => {
    setIsNewUserFormVisible(!isNewUserFormVisible);
  };

  const handleNewUserSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    const formData = new FormData(event.target);
    const newUser = {
      name: formData.get('name'), // Assuming the input's name is 'name'
      phone: formData.get('phone'), // Assuming the input's name is 'phone'
    };
    console.log(newUser); // Here you can handle the newUser object (e.g., state update, API call)

    // Close the form after submit
    setIsNewUserFormVisible(false);
  };


  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className="bg-black w-64 h-screen flex flex-col items-start pt-6 pl-6 justify-between">
          <div>
            <h1 className="text-white text-2xl mb-5">Bot Squad</h1>
            {/* Existing Add New User Button */}
            <button onClick={toggleNewUserForm} style={{
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
            {isNewUserFormVisible && (
              <form onSubmit={handleNewUserSubmit} style={{ marginTop: '20px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                />
                <button type="submit" style={{
                  display: 'block',
                  width: '100%',
                  backgroundColor: '#E65F2B',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}>
                  Submit
                </button>
              </form>
            )}
          </div>
          {/* New Circle Button at the bottom left with Icon */}
          <button onClick={toggleChatbot} style={{
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
              width: '24px',
              height: '24px',
            }} />
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
          }} placeholder="Search..." />
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
            }} />
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
              }} />
            ))}
            <MyChatbot isVisible={isChatbotVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
