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
    }, 1500)
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
            <Space />
        )
      }
    </div>
  );
}

export default App;