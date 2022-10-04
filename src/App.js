import React from 'react';
import Home from './routes/home/home.component.js';
import SignIn from './routes/sign-in/sign-in.component.js';
import Navigation from './routes/navigation/navigation.component.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const Shop = () => {
    return <div>I am shop </div>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
