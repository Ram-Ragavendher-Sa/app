import React from 'react';
import styles from './Home.css'; // Using CSS modules

const Home = () => {
  const navItems = ['Home', 'About', 'TV Shows', 'Movies', 'New&Popular', 'My List'];

  return (
    <header>
      <nav className='navbar'>
        <div className='Lg' bgImage='Logo'></div>
        <h1 className='title'>LEASE EASE</h1>
        <ul className='navopp'>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Home;