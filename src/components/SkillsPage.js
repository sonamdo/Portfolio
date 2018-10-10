import React from 'react';

const SkillsPage = () => (
  <div>
    <h2 id = "skills">Skills</h2>
      <div className = "row">
        <div className = "col-md-4">
          <ul><div className = "skillTreeHead">Front End</div>
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
        <div className = "col-md-4 skillTree">
          <ul><div className = "skillTreeHead">Back End</div>
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
        <div className = "col-md-4 skillTree">
          <ul><div className = "skillTreeHead">Supporting Skills</div>
            <div className = "skillTreeBody">
              <li>Linux</li>
              <li>Git</li>
              <li>Mongodb</li>
              <li>noSQL</li>
              <li>Mocha</li>
            </div>
          </ul>
        </div>
      </div>
  </div>
);

export default SkillsPage;
