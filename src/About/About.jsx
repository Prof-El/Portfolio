import React from "react";
import './About.css'

import profile_pic from '../images/my-pic.jpg'
import movie_app from '../images/movie-app.png'
import gallery_app from '../images/gallery-app.png'
import github from '../images/github.jpg'
import linkedin from '../images/linkedin2.jpg'
import html from '../images/html.jpg'
import css from '../images/css.jpg'
import javascript from '../images/javascript.jpg'
import python from '../images/python.jpg'
import git from '../images/git.jpg'
import sql from '../images/sql.jpg'




const About = () => {



    return(
        <div className="home">
            <div style={{width: '100%', height: 30, marginBottom: 20}} className="nav-bar">
                
                <div style={{display: 'flex'}}>
                    <a href="https://github.com/Prof-El/HNGx_Internship/tree/661eee1591a46f57816edd7a3cfccca37644a11b" target="_blank">
                        <img className="icon" style={{width: 36, borderRadius: 25, marginRight: 5}} src={github} />
                    </a>
                    <a href="https://www.linkedin.com/in/abel-emmanuel-a7270119a/" target="_blank">
                    <img className="icon" style={{width: 36, borderRadius: 25, marginRight: 5}} src={linkedin} />
                </a>
                </div>
                <h2>Frontend <br /> <span>Developer</span></h2>
               
            </div>
            <div className="about-page">
                <div className="personal-info">
                    <div className="info-card">
                        <img className="profile-pic" src={profile_pic} alt="my picture" />
                        <p className="my-name">Emmanuel Abel</p>
                    </div>
                     
                    <div className="intro">
                        <p style={{textAlign: 'left'}}>Greeting. I'm <span style={{color: 'red'}}>Emmanuel</span>, a <span style={{color: 'red'}}>Frontend Engineer</span> weaving digital enchantments with code. I'm a staunch advocate for inclusive design, ensuring the web is accessible to all. 
                            Beyond the screen, I explore nature, capture moments through photography, and find inspiration in the pages of a good book. 
                           
                        </p>
                    </div>
                
                </div>
            <div className="huge-text">
                <h2 className="header">Sample Projects</h2>
                <div className="projects">
                    <a className="movie-app" href="https://incomparable-llama-171f45.netlify.app/" target="_blank">
                        
                            <img src={movie_app} />
                            <p>Movie App</p>
                        
                    </a>
                   
                   <a className="gallery-app" href="https://lighthearted-cajeta-f5f0e2.netlify.app/ " target="_blank">
                        <img src={gallery_app} />
                        <p>Gallery App</p>
                   </a>
                  
                </div>
                <h2 style={{marginTop: 20}} className="header">My Services</h2>
                <div className="services">
                    <div className="service">
                        
                          <h4>Web Design</h4>
                        
                    </div>
                   
                   <div className="service">
                        <h4>Data Analysis</h4>
                   </div>
                  
                </div>
                <div className="tools">
                    <h2 style={{marginTop: 20, marginBottom: 15}} className="header">Tools</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={html} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={css} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={javascript} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={python} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={sql} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={git} />
                        <img className="icon" style={{width: 50, marginRight: 5,  marginBottom: 5}} src={github} />
                    </div>
                </div>
                <div className="contacts">
                    <h2 style={{marginTop: 20, marginBottom: 15}} className="header">Leave Me a Messge</h2>
                    <p>Email: emmyblaze777@gmail.com</p>
                    <p>Phone Number: 09074384936</p>
                </div>
              
            </div>

        </div>
        
        </div>
        
    )
}



export default About;