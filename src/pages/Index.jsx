import logo from '../assets/BandW.svg'
import Image1 from '../assets/slides/METbox.png'
import Image2 from '../assets/slides/CCbox.png'
import Image3 from '../assets/slides/AGbox.png'
import gitHub from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import email from '../assets/email.svg'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// eslint-disable-next-line no-unused-vars
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const Index = (props) => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
 
    return (
        <div className="indexMain">
            <img src={logo}  alt="logo" id="logo"/>
            <div className="slideShow">
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                    >
                        <div id="Slides" data-src={Image1} />
                        <div id="Slides" data-src={Image2} />
                        <div id="Slides" data-src={Image3} />
                    </AutoplaySlider>
            </div>
            <a href="https://github.com/lloddy" target="_blank" rel="noreferrer">
                <img src={gitHub}  alt="GitHub" id="github" className="icons"/>
            </a>
            <a href="https://www.linkedin.com/in/lloyd-eddy-6136705/" target="_blank" rel="noreferrer">
                <img src={linkedin}  alt="LinkedIn" id="linkedin" className="icons"/>
            </a>
            <a href="mailto:lloyd_eddy@yahoo.com">
                <img src={email} alt="Email" id="emailIcon" className="icons" />
            </a>
        </div>
    );
};

export default Index;