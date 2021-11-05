import logo from '../assets/BandW.svg'
import Image1 from '../assets/MET.jpeg'
import Image2 from '../assets/Crit.png'
import Image3 from '../assets/AvantGarde.png'
import gitHub from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import email from '../assets/email.svg'

const Index = (props) => {


    return (
        <div className="indexMain">
            <img src={logo}  alt="logo" id="logo"/>
            <div>
                    <img src={Image1} alt="scrolling image" id="scrollImage"/>
            </div>
            <a href="https://github.com/lloddy" target="_blank">
                <img src={gitHub}  alt="GitHub" id="github" className="icons"/>
            </a>
            <a href="https://www.linkedin.com/in/lloyd-eddy-6136705/" target="_blank">
                <img src={linkedin}  alt="LinkedIn" id="linkedin" className="icons"/>
            </a>
            <a href="mailto:lloyd_eddy@yahoo.com">
                <img src={email} alt="Email" id="emailIcon" className="icons" />
            </a>
        </div>
    );
};

export default Index;