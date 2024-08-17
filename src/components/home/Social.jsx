import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/_soorajsivadas_" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/SOORAJTS2001" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sooraj-t-s-58b9001a9/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;