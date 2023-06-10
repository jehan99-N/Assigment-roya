import React, { useState } from 'react'
import TopNavbar from './components/layout/header/TopNavbar';
import Footer from './components/layout/footer/footer';
import News from './components/homepage/News';
import './App.css'; 

function App() {
 
  return (
    <div>
      <TopNavbar />
      <News />
      <Footer />
    </div>
  );
}

export default App;