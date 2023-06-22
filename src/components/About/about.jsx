import React from 'react'
import './about.css'
import company from '../../assets/company.jpeg'

const About = () => {
    return (
        <section id='about'>
            <h5>About Us</h5>

            <div className="container about__container">
        <div className="about__company">
          <div className="about__company-image">
            <img src={company} alt="About Image" />  
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            
              <h5>Experience</h5>
              <small>10 Years in the business</small>
            </article>

            <article className='about__card'>
            
              <h5>Clients </h5>
              <small>50+ clients</small>
            </article>

            <article className='about__card'>
             
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>     
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quasi officia est odit ab doloribus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
    
    )
}

export default About