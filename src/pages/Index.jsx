import logo from '../assets/BandW.svg'
import Image1 from '../assets/MET.jpeg'
import Image2 from '../assets/Crit.png'
import Image3 from '../assets/AvantGarde.png'

const Index = (props) => {


    return (
        <div className="indexMain">
            <img src={logo}  alt="logo" id="logo"/>
            <div>
                <img src={Image1} alt="scrolling image" id="scrollImage"/>
            </div>
        </div>
    );
};

export default Index;