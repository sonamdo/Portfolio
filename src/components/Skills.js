import React from 'react';

const Skills = () => (
  <div className = "container" id = "skills">
  <span id = "skillsAnchor"></span>
    <h2 className = "sectionBanner">Skills</h2>
    <div className = "row skillBox">
        <div className = "skillTree col-sm-4">
          <img src = {require("../images/MonitorPhone.png")} className = "skillImg" alt = "Front End" />
          <ul><div className = "skillTreeHead"><h3>Front End</h3></div>
            <div className = "skillTreeBody">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Bootstrap</li>
              <li>Flexbox</li>
              <li>SASS/SCSS</li>
            </div>
          </ul>
        </div>
        <div className = "skillTree col-sm-4">
        <img src = {require("../images/Screen.png")} className = "skillImg" alt = "Back End" />
          <ul><div className = "skillTreeHead"><h3>Back End</h3></div>
            <div className = "skillTreeBody">
              <li>Express</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Babel</li>
              <li>Redux</li>
              <li>Webpack</li>
              <li>Socket IO</li>
            </div>
          </ul>
        </div>
        <div className = "skillTree col-sm-4">
        <img src = {require("../images/Gears.png")} className = "skillImg" alt = "Supporting Skills" />
          <ul><div className = "skillTreeHead"><h3>Supporting Skills</h3></div>
            <div className = "skillTreeBody">
              <li>Linux</li>
              <li>Git</li>
              <li>Mongodb</li>
              <li>noSQL</li>
              <li>Mocha</li>
              <li>Java</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
);

export default Skills;
