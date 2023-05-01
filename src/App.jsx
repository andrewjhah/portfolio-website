import React, { useState, useEffect } from "react";
import "./App.css";
import Space from "./Space";
import RingLoader from "react-spinners/RingLoader";


function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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
        ) : (
          <div>
            <Space />
            <div style={{position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", color: "#e6e6e6", fontSize: "18px",}}>
            <div>
              <span className="typing-text">Welcome to andrewhah.com</span>
              <br />
              <span className="typing-text-second"> Learn more about Andrew here:</span>
            </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;