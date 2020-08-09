import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section className="aboutPage" id="section2">
        <div className="aboutTitle">
          <h2>Me, Myself & I</h2>
        </div>
        <main className="lists">
          <div className="personalList">
            <ul>
              <li>I was born, raised and educated in Newcastle</li>
              <li>
                I attended Newcastle University and studied Psychology before
                becoming a software developer
              </li>
              <li>
                I began teaching myself basic programming until I joined Code
                Nation
              </li>
              <li>
                I attended Code Nations Master Course and am eager to find my
                first role
              </li>
              <li>
                I'm passionate mainly about React, I love designing anything
                from websites to full stack applications
              </li>
            </ul>
          </div>
          <div className="workList">
            <div className="toolBoxTitle">
              <p className="toolTitle">My Toolbox consists of:</p>
            </div>
            <div className="iconImages">
              <div className="box htmlBox"></div>
              <div className="box cssBox"></div>
              <div className="box jsBox"></div>
              <div className="box reactBox"></div>
              <div className="box nodeBox"></div>
              <div className="box mongoBox"></div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default About;
