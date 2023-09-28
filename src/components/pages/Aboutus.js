import React, { useEffect } from 'react';
import './Aboutus.css'; // Make sure to import your CSS file


function TeamMember({ name, role, image, description }) {
  const toggleMenu = (event) => {
    event.target.parentElement.classList.toggle('active');
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu');

    Array.from(menuItems).forEach((menu) => {
      menu.addEventListener('click', toggleMenu);
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      Array.from(menuItems).forEach((menu) => {
        menu.removeEventListener('click', toggleMenu);
      });
    };
  }, []);

  return (
    <div className="team">
      <div className="team_img">
        <img src={image} alt="team_member" />
      </div>
      <div className="team_role">{role}</div>
      <div className="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div className="wrapper">
      <div className="our_team">
        <TeamMember
          name="Alex Wood"
          role="Co-founder"
          image="team_1.png"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, optio?"
        />
        <TeamMember
          name="Rossie Meg"
          role="HR Manager"
          image="team_2.png"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, optio?"
        />
        <TeamMember
          name="Ellyse Perry"
          role="Developer"
          image="team_3.png"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, optio?"
        />
        <TeamMember
          name="Jason Peter"
          role="Support Manager"
          image="team_4.png"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, optio?"
        />
      </div>
    </div>
  );
}

export default OurTeam;
