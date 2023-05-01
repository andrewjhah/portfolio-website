import React, { useState, useEffect } from "react";
import "./App.css";
import Space from "./Space";
import About from "./About";
import RingLoader from "react-spinners/RingLoader";


function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const [showAbout, setShowAbout] = useState(false)
  const handleButtonClick = () => {
    setShowAbout(true);
  };

  return (
    <div className="App">
      {
        loading ? (
          <div className="Loader">
          <RingLoader
          color={'#c7e2fe'}
          loading={loading}
          size={30}
          />
        </div>
        ) : showAbout ? (
          <About /> ) : (
          <div>
            <Space onButtonClick={handleButtonClick} />
            <div style={{position: "absolute", bottom: "12.5%", left: "50%", transform: "translateX(-50%)", color: "#e6e6e6", fontSize: "18px",}}>
            <div>
              <span className="typing-text">Welcome to andrewhah.com</span>
              <br />
              <span className="typing-text-second"> Learn more about Andrew here:</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
              <button
                onClick={handleButtonClick}
                className="fade-in-button"
                style={{ display: 'block', marginTop: '15px', backgroundColor: '#e6e6e6', color: 'black', fontSize: '16px', padding: '8px 45px', borderRadius: '4px', cursor: 'pointer',
                }}>
                Enter
              </button>
            </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;