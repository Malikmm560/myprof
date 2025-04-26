import './index.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [circlePosition, setCirclePosition] = useState({ top: '50%', left: '50%' });

  const projects = [
    {
      id: 1,
      title: "Tracking Objects",
      description: "A project to track objects in a video stream using machine learning.",
      image: "track.png",
    },
    {
      id: 2,
      title: "Custom Programming Language (ML)",
      description: "Based on C++ custom syntax and compiler.",
      image: "letter-m.png",
    },
    {
      id: 3,
      title: "Cell.io",
      description: "Similar to agar.io but different gameplay.",
      image: "cell.io.png",
    }
  ];

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
  };

  const endGame = () => {
    setGameStarted(false);
    alert(`Game Over! Your Score: ${score}`);
  };

  const moveCircle = () => {
    const newTop = Math.random() * 80 + 10; 
    const newLeft = Math.random() * 80 + 10;
    setCirclePosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });
  };

  const handleClickCircle = () => {
    setScore(score + 1);
    moveCircle();
  };

  const handleProfileClick = () => {
    startGame(); 
  };


  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        moveCircle();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  return (
    <div className="container">

      <div className="center-photo" onClick={handleProfileClick}>
        <img src="download.jpg" alt="Malek" className="profile-img" />
      </div>


      <div className="name-about">
        <div className="name">Malik O_o</div>
        <div className="about">
          Yo! I’m Malek, just a dev building cool stuff with JS, React, C#, Python, and my own language MalLang HEHE :D
        </div>
      </div>


      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" onClick={() => setSelectedProject(project.id)} key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} className="photo" />
          </div>
        ))}
      </div>


      {gameStarted && (
        <div className="game-container">
          <h2>Score: {score}</h2>
          <p>Click the Circle!</p>
          <div
            className="game-circle"
            style={{ top: circlePosition.top, left: circlePosition.left }}
            onClick={handleClickCircle}
          />
        </div>
      )}


      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h2>{projects[selectedProject - 1].title}</h2>
            <p>{projects[selectedProject - 1].description}</p>
            <img src={projects[selectedProject - 1].image} alt={projects[selectedProject - 1].title} />
            <button onClick={() => setSelectedProject(null)} className="button_close">✖️</button>
          </div>
        </div>
      )}

    
      <footer className="footer">
        Built with 💜 by Malek • GitHub: <a href="https://github.com/malikmm560">malikmm560</a>
      </footer>
    </div>
  );
}

export default App;
