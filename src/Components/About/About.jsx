import React from 'react'
import './About.css'
import theme_pattern from '../../assets/underline.svg'
import about_profile from '../../assets/about_profile.svg'
import me from '../../assets/me.jpeg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={me} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Currently, I’m working with Telenor as a consultant via Experis, where I split my time between working as Tech-Lead and hands-on development.</p>
                    <p>My expertise spans across various technologies, including Python (Django, Flask), JavaScript (React, Angular), Java, HTML & CSS, and cloud platforms like AWS.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width: "70%"}}/>70%</div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "40%"}}/>40%</div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/>60%</div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "50%"}}/>50%</div>
                    <div className="about-skill"><p>React</p><hr style={{width: "40%"}}/>30%</div>
                    <div className="about-skill"><p>Angular</p><hr style={{width: "20%"}}/>20%</div>
                    <div className="about-skill"><p>AWS</p><hr style={{width: "30%"}}/>30%</div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
