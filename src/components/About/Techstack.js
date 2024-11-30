import React, { useState } from 'react';
import { Code, Terminal, Wand2 } from 'lucide-react';

function Techstack() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: 'UI/UX Design',
      icon: Wand2,
      description: 'Create design products with unique ideas that matter.',
      projects: 5,
    },
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'Making the Web Look Good.',
      projects: 7,
    },
    {
      title: 'Backend Development',
      icon: Terminal,
      description: "Building the Web's Backbone.",
      projects: 3,
    },
  ];

  const introTexts = [
    {
      title: 'Crafting User Experiences that Delight and Inspire',
      description:
        'I am a UI/UX designer who loves to create engaging and delightful user experiences for web and mobile applications. I use my skills in user research, design thinking, and prototyping to craft interfaces that are not only aesthetically pleasing but also easy to use and navigate.',
    },
    {
      title: "The Web's & Mobile's Magician",
      description:
        'As a frontend developer, I create stunning and responsive web pages that capture the attention and imagination of users. I use my skills in HTML, CSS, JavaScript, and various frameworks to design and implement user interfaces that are visually appealing and user-friendly.',
    },
    {
      title: 'Coding with Efficiency',
      description:
        'As a backend developer, I create robust and scalable web applications that handle the logic and data behind the scenes. I use my skills in Python, Django, SQL, and various APIs to develop and deploy backend systems that are secure, reliable, and efficient.',
    },
  ];

  return (
    <section className="introduction" id="introduction">
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`card ${activeCard === index ? 'active' : ''}`}
            onClick={() => setActiveCard(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveCard(index);
            }}
          >
            <div className="card-header">
              <h3 className="card-title">{card.title}</h3>
              <card.icon />
            </div>
            <p className="card-description">{card.description}</p>
            <a href="/projects" className="card-link">
              {card.projects} PROJECTS
            </a>
          </div>
        ))}
      </div>

      <div className="intro-content">
        <p className="intro-label">Introduction</p>
        <h2 className="intro-title">Hello! I'm Harshil Patel</h2>
        {activeCard !== null ? (
          <>
            <h4 className="intro-subtitle">{introTexts[activeCard].title}</h4>
            <p className="intro-description">{introTexts[activeCard].description}</p>
          </>
        ) : (
          <p>Select a card to see more details!</p>
        )}
      </div>
    </section>
  );
}

export default Techstack;
