import Image1 from '../assets/MET.jpeg'
import Image2 from '../assets/Crit.png'
import Image3 from '../assets/AvantGarde.png'

const Portfolio = (props) => {
    return (
        <div>
            <h1 className="portfolioTitle">Portfolio</h1>
            <div className="projects">
                <div className="project1">
                    <img src={Image1} alt="MET" id="project1" className="portfolioImages"/>
                    <div className="portfolioText">
                        <p>Art of the Metropolitan Museum of Art
                        This is a search engine for art through the Metropolitan Museum of Art using an API.</p>
                        <p>
                        <table>
                            <tr><th>Technologies Used</th></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Javascript/jQuery</td></tr>
                        </table>
                        </p>
                    </div>
                </div>
                <div className="project2">
                    <img src={Image2} alt="CritClub" id="project2" className="portfolioImages"/> 
                    <div className="portfolioText">
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
                    </div>
                </div>
                <div className="project3">
                    <img src={Image3} alt="Avant-Garde" id="project3" className="portfolioImages"/>
                    <div className="portfolioText">
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
                            
                            <tr><td>React</td>	<td>HTML</td></tr>
                            <tr><td>HTML</td>	<td>JavaScript/jQuery</td></tr>
                            <tr><td>Css</td>    <td>Node.js</td></tr>
                            <tr><td>Sass</td>	<td>Express.js/ejs</td></tr>
                            <tr><td>Firebase</td>	<td>Mongoose ODM</td></tr>
                            <tr><td>Inkscape</td>	<td>MongoDB</td></tr>
                            <tr><td>Deployed on Netlify</td>    <td>Deployed on Heroku</td></tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;