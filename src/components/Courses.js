import React from 'react';

const Courses = () => (
  <div>
    <h2 className = "sectionBanner" id = "courseAnchor">Courses</h2>
    <div className = "container courses">

      <div className = "row">
        <div className = "col-sm-4">
          <img src = {require("../images/freeCodeCamp.jpg")} className = "coursePics" /><br />
            <h4>FreeCodeCamp Front End Development</h4>
            <p className = "makeBold">Completed August 2017</p>
        </div>
        <div className = "col-sm-4">
          <img src = {require("../images/nodeCourse.jpg")}  className = "coursePics" /><br />
            <h4>The Complete Node.js Developer</h4>
            <p className = "makeBold">Completed January 2018</p>
        </div>
        <div className ="col-sm-4">
          <img src = {require("../images/reactCourse.jpg")} className = "coursePics" /><br />
            <h4>The Complete React Web Developer</h4>
            <p className = "makeBold">Completed April 2018</p>
        </div>
      </div>

    </div>
  </div>
)

export default Courses;
