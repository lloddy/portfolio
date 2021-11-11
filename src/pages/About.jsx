import Art from '../assets/articon.svg'
import profilePic from '../assets/propic.JPG'
const About = (props) => {
    
    return (
        <div>
            <h1 className="aboutMe">About Me</h1>
            <div className="bioInfo">
                <p className="aboutMeText">As a Software Engineer and visual artist
                I find joy in creating beautiful things. 
                Whether I’m at my easel or coding the next website, 
                creativity fuels my drive. 
                I utilize my diverse background as an artist, full-stack 
                developer and educator to invent innovative 
                solutions to complex problems. 
                I consider myself a supportive leader and invested collaborator, 
                finding potential in my colleagues to be nurtured and showcased. 
                When I’m not at my easel or computer, 
                you can find me spending time with my wife and daughter 
                who inspire me to be the best version of myself I can be.</p>
                <img src={profilePic} className="profilePic" alt="profile"/>
             </div>
             <div className="artWork">
                <h3>My Art</h3>
                <a href="https://lloydeddy.wordpress.com/" target="_blank"><img src={Art} className="artIcon" alt="art"/></a>
            </div>
        </div>
    );
};

export default About;