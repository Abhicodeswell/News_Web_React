import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
   
  const [mode, setmode] = useState('light');
  const apiKey= process.env.REACT_APP_NEWSHUB;
  const [progress, setProgress]=useState(0)

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#191919';
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
    }
  }

    return (
      <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Router>
          <Navbar mode={mode} togglemode={togglemode} />
          <Routes>
            <Route exact path="/" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="science" pageSize={8} country='in' category='science' />} />
            <Route exact path="/business" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="business" pageSize={8} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="entertainment" pageSize={8} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="general" pageSize={8} country='in' category='general' />} />
            <Route exact path="/health" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="health" pageSize={8} country='in' category='health' />} />
            <Route exact path="/science" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="science" pageSize={8} country='in' category='science' />} />
            <Route exact path="/sports" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="sports" pageSize={8} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress}   key="technology" pageSize={8} country='in' category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
  }
  export default App