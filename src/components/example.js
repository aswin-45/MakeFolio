import React from 'react';
// import './App.css';

function Example() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section className="portfolio-section">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus sem vel tristique ullamcorper. Fusce commodo sapien id turpis tempor, a euismod quam finibus.</p>
        </section>
        <section className="portfolio-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section className="portfolio-section">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Example;
