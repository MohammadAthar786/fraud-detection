import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="container">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="header">
        <h1>MOHD ATHAR JAMAL</h1>
        <h2>Data & FinTech Enthusiast</h2>
        <p>Welcome to my portfolio. I am currently working on a <strong>Fraudulent Transaction Detection System</strong> using AI & ML techniques.</p>
      </header>
      <section className="clock-section">
        <h3>Current Time</h3>
        <div className="clock">{formatTime(time)}</div>
      </section>
      <section className="project">
        <h3>My Project: Fraudulent Transaction Detection</h3>
        <p>This project aims to detect fraudulent transactions in banking systems using machine learning models.</p>
        <p><strong>Technologies Used:</strong> Python, Pandas, NumPy, Scikit-Learn, Jupyter Notebook</p>
        <a className="download-btn" href="/mnt/data/Transaction Fraud detection system (2).ipynb" download>Download Project Notebook</a>
      </section>
      <section className="contact">
        <h3>Contact Me</h3>
        <a href="mailto:mohdatharjamal@gmail.com">Email: mohdatharjamal@gmail.com</a>
        <a href="https://www.linkedin.com/in/mohammed-athar-8687b324a/" target="_blank">LinkedIn Profile</a>
        <p>Phone: 9634797852</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 MOHD ATHAR JAMAL | All Rights Reserved</p>
      </footer>
      <style>{`
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f2f5;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .navbar {
          background: #007bff;
          padding: 15px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .navbar a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        .header, .project, .contact, .clock-section {
          margin: 40px auto;
          padding: 20px;
          max-width: 800px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }
        .clock {
          font-size: 36px;
          color: #007bff;
          font-weight: bold;
          padding: 10px;
          border-radius: 10px;
          background: #fff;
          display: inline-block;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .download-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        .footer {
          background: #007bff;
          padding: 20px;
          color: white;
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

export default App;
