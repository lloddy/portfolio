import Image1 from '../assets/MET.jpeg'
import Image2 from '../assets/Crit.png'
import Image3 from '../assets/AvantGarde.png'
import Image4 from '../assets/junto.png'
import Image5 from '../assets/brighter.png'
import gitHub from '../assets/github.svg'
import launch from '../assets/launch.svg'

const Portfolio = (props) => {
    return (
        <div>
            <h1 className="portfolioTitle">Portfolio</h1>
            <div className="projects">
                <div className="brighter">
                    <a href="https://abrighterday.herokuapp.com/" rel="noreferrer" target="_blank">
                        <img src={Image5} alt="brighter" id="brighter" className="portfolioImages"/>
                    </a>
                    <div className="portfolioText">
                        <h2 className="projectTitles">Brighter</h2>
                        <p>I've struggled with depression all my life. I wanted to make an app that would let users post
                            uplifting things and support each other. Here, users can create an account and post pictures with
                            descriptions to inspire other users.
                        </p>
                        <p>
                            <table>
                                <tr><th>Technologies Used</th></tr>
                                <tr><td>React.js</td></tr>
                                <tr><td>MongoDB</td></tr>
                                <tr><td>Node.js</td></tr>
                                <tr><td>Express.js</td></tr>
                                <tr><td>Javascript/jQuery</td></tr>
                                <tr><td>HTML</td></tr>
                                <tr><td>CSS</td></tr>
                                <tr><td>Cloudinary</td></tr>
                                <tr><td>Deployed with Heroku</td></tr>
                            </table>
                        </p>
                        <div className="portIcons">
                            <div className="gitHubPort">
                                <a href="https://github.com/lloddy/brighterApp" rel="noreferrer" target="_blank">
                                    <img src={gitHub} className="gitHubPort" alt="github" id="portIconsHover"/>
                                </a>
                                <h3>REPO</h3>
                            </div>
                            <div lassName="launchPort">
                                <a href="https://abrighterday.herokuapp.com/" rel="noreferrer" target="_blank">
                                    <img src={launch} className="launchPort" alt="github" id="portIconsHover"/>    
                                </a>
                                <h3 className="launchPort">SITE</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project4">
                    <a href="https://thejunto.herokuapp.com/" rel="noreferrer" target="_blank">
                        <img src={Image4} alt="Junto" id="project4" className="portfolioImages"/>
                    </a>
                    <div className="portfolioText">
                        <h2 className="projectTitles">Junto</h2>
                        <p>In 1727, Ben Franklin started The Junto, a writing group aimed at helping the members make self-improvements. 
                            The literal definition is: ???a group of persons joined for a common purpose.??? 
                            In 2021 Junto is being re-established as a social forum for developer collaboration.</p>
                            <p>Junto is the endpoint of all your coding questions.</p>
                        <p>
                        <table>
                            <tr><th>Technologies Used</th></tr>
                            <tr><td>Python</td></tr>
                            <tr><td>Django</td></tr>
                            <tr><td>Javascript/jQuery</td></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Disqus</td></tr>
                            <tr><td>Materialize</td></tr>
                        </table>
                        </p>
                        <div className="portIcons">
                            <div className="gitHubPort">
                                <a href="https://github.com/lloddy/junto/tree/Lloyd" rel="noreferrer" target="_blank">
                                    <img src={gitHub} className="gitHubPort" alt="github" id="portIconsHover"/>
                                </a>
                                <h3>REPO</h3>
                            </div>
                            <div lassName="launchPort">
                                <a href="https://thejunto.herokuapp.com/" rel="noreferrer" target="_blank">
                                    <img src={launch} className="launchPort" alt="github" id="portIconsHover"/>    
                                </a>
                                <h3 className="launchPort">SITE</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project3">
                    <a href="https://avantgardeartists.netlify.app/" rel="noreferrer" target="_blank"><img src={Image3} alt="Avant-Garde" id="project3" className="portfolioImages"/></a>
                    <div className="portfolioText">
                        <h2 className="projectTitles">Avant-Garde</h2>
                        <p>This is a website to view, post, and share your favorite artists. 
                            A user, once logged in, can create their own artist entry. 
                            They can enter a variety of details about their artist, including:</p>
                        <ul>
                            <li>Artist name</li>
                            <li>5 images of their work (url's)</li>
                            <li>Profile pic of the artist</li>
                            <li>Date of birth/death</li>
                            <li>Movement/era they worked in</li>
                            <li>Bio</li>     
                        </ul>
                        <p>All these can be edited if the user is logged in. 
                            Also, a user can delete artist entries. Non-users can see this info, 
                            but can't edit/delete entries. Users can sign-in/sign-up with their Google account.</p>
                        <table>
                            <tr><th>Technologies Used</th></tr>
                            <tr>
                            <th>Front End</th>	
                            <th>Back End</th>
                            </tr>
                            
                            <tr><td>React.js</td>	<td>HTML</td></tr>
                            <tr><td>HTML</td>	<td>JavaScript/jQuery</td></tr>
                            <tr><td>Css</td>    <td>Node.js</td></tr>
                            <tr><td>Sass</td>	<td>Express.js/ejs</td></tr>
                            <tr><td>Firebase</td>	<td>Mongoose ODM</td></tr>
                            <tr><td>Inkscape</td>	<td>MongoDB</td></tr>
                            <tr><td>Deployed with Netlify</td>    <td>Deployed with Heroku</td></tr>
                        </table>
                        <div className="portIcons">
                            <div className="gitHubPort">
                                <a href="https://github.com/lloddy/avant-garde-front" rel="noreferrer" target="_blank">
                                    <img src={gitHub} className="gitHubPort" alt="github" id="portIconsHover"/>
                                </a>
                                <h3>REPO</h3>
                            </div>
                            <div lassName="launchPort">
                                <a href="https://avantgardeartists.netlify.app/" rel="noreferrer" target="_blank">
                                    <img src={launch} className="launchPort" alt="github" id="portIconsHover"/>    
                                </a>
                                <h3 className="launchPort">SITE</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project2">
                    <a href="https://desolate-inlet-28888.herokuapp.com/" rel="noreferrer" target="_blank">
                        <img src={Image2} alt="CritClub" id="project2" className="portfolioImages"/>
                    </a>
                    <div className="portfolioText">
                    <h2 className="projectTitles">Crit Club</h2>
                        <p>Are you an artist, just out of college/grad school craving the feedback that you once 
                            received daily on your work, or are you just a glutton for punishment? Fear no more, 
                            because Crit Club is here! A site where you can post work for your peers to tear apart 
                            for your betterment...or detriment.</p>

                        <p>On Crit Club you can:</p>
                        <ul>
                            <li>Post Artwork</li>
                            <li>Edit or Delete your posts (let's pretend that art never happened)</li>
                            <li>Comment or troll on other's posts</li>
                            <li>Or just lurk and watch the turmoil unfold</li>
                        </ul>
                        <table>
                            <tr><th>Technologies Used</th></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>JavaScript/jQuery</td></tr>
                            <tr><td>Node.js</td></tr>
                            <tr><td>Express.js/ejs</td></tr>
                            <tr><td>Mongoose ODM</td></tr>
                            <tr><td>MongoDB</td></tr>
                        </table>
                            <div className="portIcons">
                                <div className="gitHubPort">
                                    <a href="https://github.com/lloddy/crit-club" rel="noreferrer" target="_blank">
                                        <img src={gitHub} className="gitHubPort" alt="github" id="portIconsHover"/>
                                    </a>
                                    <h3>REPO</h3>
                                </div>
                                <div lassName="launchPort">
                                        <a href="https://desolate-inlet-28888.herokuapp.com/" rel="noreferrer" target="_blank">
                                            <img src={launch} className="launchPort" alt="github" id="portIconsHover"/>    
                                        </a>
                                        <h3 className="launchPort">SITE</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="project1">
                    <a href="https://fervent-edison-ae9da6.netlify.app/" rel="noreferrer" target="_blank">
                        <img src={Image1} alt="MET" id="project1" className="portfolioImages"/>
                    </a>
                    <div className="portfolioText">
                        <h2 className="projectTitles">Art of the Metropolitan Museum of Art</h2>
                        <p>This is a search engine for art through the Metropolitan Museum of Art using an API. 
                            Users can search through the MET database for art, historic objects, as well as anything else they wish.</p>
                        <p>
                        <table>
                            <tr><th>Technologies Used</th></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Javascript/jQuery</td></tr>
                        </table>
                        </p>
                        <div className="portIcons">
                            <div className="gitHubPort">
                                <a href="https://github.com/lloddy/Art-of-the-Metropolitan-Museum-of-Art" rel="noreferrer" target="_blank">
                                    <img src={gitHub} className="gitHubPort" alt="github" id="portIconsHover"/>
                                </a>
                                <h3>REPO</h3>
                            </div>
                            <div lassName="launchPort">
                                <a href="https://fervent-edison-ae9da6.netlify.app/" rel="noreferrer" target="_blank">
                                    <img src={launch} className="launchPort" alt="github" id="portIconsHover"/>    
                                </a>
                                <h3 className="launchPort">SITE</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;