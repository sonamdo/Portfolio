import React from 'react';

const CoursesPage = () => (
  <div>
    <h1 className = "sectionBanner" id = "courseAnchor">Courses</h1>
    <div className = "container CoursesPage">
      <div className = "co">
        <img src = {require("../images/freeCodeCamp.jpg")} className = "coursePics" /><br />
          <h4>FreeCodeCamp Front End Development</h4>
          <p className = "makeBold">Completed August 2017</p>
      </div>
      <div className = "co">
        <img src = {require("../images/nodeCourse.jpg")}  className = "coursePics" /><br />
          <h4>The Complete Node.js Developer</h4>
          <p className = "makeBold">Completed January 2018</p>
      </div>
      <div className ="co">
        <img src = {require("../images/reactCourse.jpg")} className = "coursePics" /><br />
          <h4>The Complete React Web Developer</h4>
          <p className = "makeBold">Completed April 2018</p>
      </div>
    </div>
  </div>
)

export default CoursesPage;
