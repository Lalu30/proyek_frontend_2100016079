import React from 'react'
import "./about.css"
import Navbar from '../components/navbar/Navbar'

const About = () => {
  return (
    <>
    
    <Navbar/>
    <section className='about' id='about'>
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className='aboutInfo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi qui rerum temporibus voluptates saepe quibusdam, tenetur perferendis nihil, amet eum odio cum recusandae eos aliquid autem aperiam quaerat, non corporis.</h1>
        <a className='aboutButton' href="#">
          Read More About Me <i class="uil uil-arrow-from-right"></i>           
        </a>
      </div>
    </section>
    </>
  )
}

export default About