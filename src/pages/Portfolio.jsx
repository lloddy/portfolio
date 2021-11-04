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
                    <p className="portfolioText">
                        Art of the Metropolitan Museum of Art
                        This is a search engine for art through the Metropolitan Museum of Art using an API.

                        Technologies Used:
                        HTML
                        CSS
                        Javascript/jQuery
                    </p>
                </div>
                <div className="project2">
                    <img src={Image2} alt="CritClub" id="project2" className="portfolioImages"/> 
                    <p className="portfolioText">
                        Are you an artist, just out of college/grad school craving the feedback that you once received daily on your work, or are you just a glutton for punishment? Fear no more, because Crit Club is here! A site where you can post work for your peers to tear apart for your betterment...or detriment.

                        On Crit Club you can:

                        Post Artwork
                        Edit or Delete your posts (let's pretend that art never happened)
                        Comment or troll on other's posts
                        Or just lurk and watch the turmoil unfold
                        Technologies Used:
                        HTML
                        CSS
                        JavaScript/jQuery
                        Node.js
                        Express.js/ejs
                        Mongoose ODM
                        MongoDB
                    </p>
                </div>
                <div className="project3">
                    <img src={Image3} alt="Avant-Garde" id="project3" className="portfolioImages"/>
                    <p className="portfolioText">
                        This is a website to view, post, and share your favorite artists. A user, once logged in, can create their own artist entry. They can enter a variety of details about their artist, including:

                        Artist name
                        5 images of their work (url's)
                        Profile pic of the artist
                        Date of birth/death
                        Movement/era they worked in
                        Bio
                        All these can be edited if the user is logged in. Also, a user can delete artist entries. Non-users can see this info, but can't edit/delete entries. Users can sign-in/sign-up with their Google account.

                        Technologies Used
                        Front End	Back end
                        - React	- HTML
                        - HTML	- JavaScript/jQuery
                        - Css	- Node.js
                        - Sass	- Express.js/ejs
                        - Firebase	- Mongoose ODM
                        - Inkscape	- MongoDB
                        Deployed on Netlify	Deployed on Heroku
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;