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
             <div className="aboutSkillList">
                    <table>
                        <tr><th><h2>SKILLS</h2></th></tr>
                        <tr><td>Full-Stack Development</td></tr>
                        <tr><td>Software Development</td></tr>
                        <tr><td>Back-End Web Development</td></tr>
                        <tr><td>Front-End Web Development</td></tr>
                        <tr><td>HTML</td></tr>
                        <tr><td>CSS</td></tr>
                        <tr><td>SASS</td></tr>
                        <tr><td>JavaScript</td></tr>
                        <tr><td>Mongoose ODM</td></tr>
                        <tr><td>Node.js</td></tr>
                        <tr><td>React.js</td></tr>
                        <tr><td>MongDB</td></tr>
                        <tr><td>Postman</td></tr>
                        <tr><td>JSON</td></tr>
                        <tr><td>Django</td></tr>
                        <tr><td>JQuery</td></tr>
                        <tr><td>Python</td></tr>
                        <tr><td>Express.js</td></tr>
                        <tr><td>GitHub</td></tr>
                        <tr><td>Adobe Creative Suite</td></tr>
                    </table>
                </div>    
             <div className="artWork">
                <h2>My Art</h2>
                <a href="https://lloydeddy.wordpress.com/" rel="noreferrer" target="_blank"><img  src={Art} className="artIcon" alt="art"/></a>
            </div>
        </div>
    );
};

export default About;