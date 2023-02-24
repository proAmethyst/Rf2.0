import React from "react";
import "./Style/Footer.css";
import GitHubIcon from "./Assets/github-45-w.png";
import LinkedInIcon from "./Assets/linkedin-45-w.png";


const Footer = () => {
    return (
    <>
    <div className='footer bg-black'>
        <div className='leftSide'>
            <p className="text-gray-400 pa1"> Robofriends 2.0</p>
            <p className="text-gray-400 pa1"> &copy; All Rights Reserved</p>
        </div>
    
        <div className='center'>
            <p className="text-gray-400 pa1"> Robofriends rethinking website made by Amethyst Web Developer following ZeroToMastery Udemy course</p>
            <p className="text-gray-400 pa1"> Learn Skills with <a href="https://zerotomastery.io" className="text-green-300" target="_blank" rel="noopener noreferrer">ZeroToMastery</a></p>
            <p className="text-gray-400 pa1"> Robots, Robots heads and many other things: <a href='https://robohash.org/' className="text-green-500" target="_blank" rel="noopener noreferrer">ROBOHASH</a></p>
            <p className="text-gray-400 pa1"> Icons by: <a href='https://icons8.com/' className="text-white bg-green-600 br1-l" target="_blank" rel="noopener noreferrer">Icons8</a></p>
            <p className="text-gray-400 pa1"> <a href='https://proamethyst.github.io/mp-portfolio/' className="text-purple-600" target="_blank" rel="noopener noreferrer">Amethyst Web Developer</a></p>
        </div>

        <div className='rightSide'>
            <p className="text-gray-400 pa1"> You can find me here:</p>   
            <p className="text-gray-400 pa1"> <img src={GitHubIcon} alt="GitHubIcon"/> <a href='https://github.com/proAmethyst' target="_blank" rel="noopener noreferrer" className='pt1 pl1'>GitHub</a></p>   
            <p className="text-gray-400 pa1"> <img src={LinkedInIcon} alt="LinkedInIcon"/> <a href='https://www.linkedin.com/in/mihai-profir-5b208b252/' target="_blank" rel="noopener noreferrer" className='pt1 pl1'>LinkedIn</a></p>   
            <p className="text-gray-400 pa1"> Email: <a href="mailto:totallyfake@email.com" target="_blank" rel="noopener noreferrer" className='pl1'>totallyfake@email.com</a></p>   
        </div>
    </div>
    </>
    );
}

export default Footer;