const Resume = (props) => {

    return (
        <div className="resume">
            <div className="resumeHeading">
                <h1 id="nameOnResume">Lloyd Eddy</h1>
                <h3>Full-Stack Developer</h3>
            </div>
            <div className="resumeFields">
                <div className="skills">
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
                <div className="experience">
                    <h2>EXPERIENCE</h2>
                    <h3>Software Engineering Fellow</h3>
                    <h4>General Assembly, Sept - Dec 2021</h4>
                    <ul>
                        <li>12 week immersive software development program.</li>
                        <li>Created full-stack applications</li>
                        <li>Database Management</li>
                        <li>Projects Designed:</li>
                        <ul type="circle">
                            <li><strong>Art of the Metropolitan Museum of Art</strong></li>
                            <p>A search engine for art through the Metropolitan Museum of Art using an API</p>
                            <a href="https://fervent-edison-ae9da6.netlify.app/" rel="noreferrer" target="_blank">Click here to visit</a>
                            <li><strong>Crit Club</strong></li>
                            <p>A full CRUD application using Express.js.</p>
                            <a href="https://desolate-inlet-28888.herokuapp.com/" rel="noreferrer" target="_blank">Click here to visit</a>
                            <li><strong>Avant-Garde</strong></li>
                            <p>A single-page React app that allows users to view, post, and share their favorite artists.</p>
                            <a href="https://avantgardeartists.netlify.app/" rel="noreferrer" target="_blank">Click here to visit</a>
                            <li><strong>Junto</strong></li>
                            <p>A python/django app that lets developers share content.</p>
                            <a href="https://thejunto.herokuapp.com/" rel="noreferrer" target="_blank">Click here to visit</a>
                            <li><strong>Brighter</strong></li>
                            <p>A React.js/Node.js app that lets users post on topics of depression and anxiety.</p>
                            <a href="https://abrighterday.herokuapp.com/" rel="noreferrer" target="_blank">Click here to visit</a>
                        </ul>
                        
                    </ul>

                    <h3>Account Manager</h3>
                    <h4>State Farm, Sept 2019 - Aug 2021</h4>
                    <ul>
                        <li>Customer Service</li>
                        <li>Sales</li>
                        <li>Insurance and Retirement Assesment</li>
                    </ul>

                    <h3>Art Restorer</h3>
                    <h4>Art Recovery Technologies, Aug 2017 - Mar 2019</h4>
                    <ul>
                        <li>Restoring and repairing damaged artwork</li>
                        <li>Handling, moving, and installing artwork</li>
                        <li>Customer service</li>
                        <li>Project managment</li>
                    </ul>

                    <h3>Assistant Professor of Art</h3>
                    <h4>Lake Superior State University, Aug 2014 - 2017</h4>
                    <ul>
                        <li>Teaching classes in fine art and art appreciation</li>
                        <li>Student advising</li>
                        <li>Public speaking</li>
                        <li>Community engagement</li>
                        <li>Curriculum development</li>
                    </ul>
                </div>
                <div className="education">
                    <h2>EDUCATION</h2>
                    <h3>Software Engineering</h3>
                    <h4>General Assembly, 2021</h4>

                    <h3>Master of Fine Arts</h3>
                    <h4>Cranbrook Academy of Art, 2001</h4>
                    <p>Merit Scholar</p>

                    <h3>Bachelor of Fine Arts</h3>
                    <h4>Siena Heights University, 1999</h4>
                    <p>Magan Cum Laude</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;