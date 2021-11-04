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
                </div>
                <div className="project2">
                    <img src={Image2} alt="CritClub" id="project2" className="portfolioImages"/> 
                </div>
                <div className="project3">
                <img src={Image3} alt="Avant-Garde" id="project3" className="portfolioImages"/>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;