import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css'


const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

const NumberOrWord = () => {
  const { param } = useParams();

  const isNumber = !isNaN(param);
  const content = isNumber ? `The number is: ${param}` : `The word is: ${param}`;

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

const StyledWord = () => {
  const { word, color, background } = useParams();

  const style = {
    color: color,
    backgroundColor: background,
  };

  return (
    <div>
      <h1 style={style}>The word is: {word}</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<NumberOrWord />} />
        <Route path="/:word/:color/:background" element={<StyledWord />} />
      </Routes>
    </Router>
  );
};

export default App;