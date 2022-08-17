import './Header.css';
import { FaLinkedinIn, FaInstagram, FaGithubSquare } from 'react-icons/fa';

function Header () {
  return (
    <div className='sidebar'>
      {/* <p id='header'></p> */}
      <header>
        <div className="namepc">
          <h4> Patrick Barbosa</h4>
          <h5>Web Developer</h5>
        </div>
        {/* <br /><br /><br /><br /><br /><br /> */}
        <div className='pags'>
          <hr size="1" ></hr>
          <a href="#about">About</a>
          <hr size="1" ></hr>
          {/* <p>Skills</p> */}
          <a href="#skills">Skills</a>
          <hr size="1" ></hr>
          {/* <p>Work</p> */}
          <a href="#projects">Work</a>
          <hr size="1" ></hr>
          {/* <p>Contact</p> */}
          <a href="#contact" >Contact</a>
          <hr size="1" ></hr>
        </div>

        <div className='icons'>
          <a href='https://www.linkedin.com/in/dvpatrick/' target="_blank" className='linkedin' rel="noreferrer" >
          <FaLinkedinIn />
          </a>
          <a href='https://www.instagram.com/patrick.ptk15/' target="_blank" rel="noreferrer">
          <FaInstagram />
          </a>
          <a href='https://github.com/dvpatrick' target="_blank" rel="noreferrer">
          <FaGithubSquare />
          </a>
        </div>
        </header>
      </div>
  )
}

export default Header;