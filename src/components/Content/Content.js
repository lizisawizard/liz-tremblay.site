import '../../style/app.scss';
import portfolioImg1 from '../../assets/images/portfolio-site_1.png';
import portfolioImg2 from '../../assets/images/portfolio-site_2.png';
import portfolioImg3 from '../../assets/images/portfolio-site_3.png';
import ceasAmbImg1 from '../../assets/images/ceas-amb-site-1.png';
import ceasAmbImg2 from '../../assets/images/ceas-amb-site-2.png';
import ceasAmbImg3 from '../../assets/images/ceas-amb-site-3.png';
import politicBee1 from '../../assets/images/politicBee-1.png';
import Button from '../Button/Button';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import Github from '../../assets/icons/Github.js';
import AdobeXD from '../../assets/icons/AdobeXD.js';
import ExternalLink from '../../assets/icons/ExternalLink.js';
import Figma from '../../assets/icons/Figma.js';

const Content = () => {
    return (
        <div className='content'>
            <div className='content--section'>
                <h2 className='content--edu-title'>EDU</h2>
                <div className='content--edu'>
                    <div className='content--edu-primary'>
                        <h3>The University of Cincinnati</h3>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <p style={{ fontSize: '18px' }}>Minor in Business Analytics</p>
                        <p style={{ fontSize: '14px' }}>Class of 2023</p>
                    </div>
                    <div className='content--edu-secondary'>
                        <p className='content--edu-description'><strong className='content--edu-description-bold'>GPA: </strong>3.396/4.0</p>
                        <p className='content--edu-description'><strong className='content--edu-description-bold'>Expected Graduation: </strong>April 2023</p>
                        <p className='content--edu-description'><strong className='content--edu-description-bold'>Honoraries/Awards: </strong>Darwin T. Turner Scholar,  National Co-op Ambassador Scholar, Dean’s List, Mortar Board</p>
                        <p className='content--edu-description'><strong className='content--edu-description-bold'>Expected Graduation: </strong>April 2023</p>
                        <p className='content--edu-description'><strong className='content--edu-description-bold'>Leadership: </strong>CEAS Ambassadors (President), Women in Technology (Co-President), ACM-W (Vice President), RevolutionUC (Branding Lead), ENED Peer Teaching Assistant, Darwin T. Turner Scholarship Program (Mentor & Ambassador)</p>
                        <Button>Download Transcript</Button>
                    </div>
                </div>
            </div>
            <div className='content--section'>
                <div className='content--projects'>
                    <div className='content--project'>
                        <h2 className='content--project-header'>PROJECTS</h2>
                        <div className='content--project-text'> 
                            <div className='content--project-primary'>
                                <h3>liz-tremblay.site</h3>
                                <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>Design & project portfolio</p>
                                <p style={{ fontSize: '14px' }}>Skills: React, Adobe XD, Github Pages</p>
                                <div className='icons-row'>
                                    <a href='https://github.com/lizisawizard'><span className='icons'><AdobeXD/></span></a>
                                    <a href='https://github.com/lizisawizard'><span className='icons'><ExternalLink/></span></a>
                                    <a href='https://github.com/lizisawizard'><span className='icons'><Github/></span></a>
                                </div>
                            </div>
                            <span className='content--project-description'>
                                <p>My portfolio site, though simple now, will be iterated on using Gatsby and GraphQL. As of now, its basic and sleek design presents the necessary - my education, projects, and past roles. However, I hope to transform my portfolio site as my technical play ground and personal hub. The next design will include a blog and more extensive information on my projects, jobs, and school experience giving onlookers a better sense of who Liz Tremblay is.</p>
                            </span>
                        </div>
                        <div className='content--project-images'>
                            <ImageDisplay url={portfolioImg1} alt='Adobe XD Designs'>Adobe XD Designs</ImageDisplay>
                            <ImageDisplay url={portfolioImg2} alt='Mobile Designs'>Mobile Designs</ImageDisplay>
                            <ImageDisplay url={portfolioImg3} alt='Adobe XD Wireframe'>New Design</ImageDisplay>
                        </div>
                    </div>
                    <div className='content--project'>
                        <div className='content--project-text'> 
                            <div className='content--project-primary'>
                                <h3>CEAS Ambassadors Site</h3>
                                <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>Club website</p>
                                <p style={{ fontSize: '14px' }}>Skills: MySQL, React, Adobe XD</p>
                                <div className='icons-row'>
                                    <a href='https://github.com/lizisawizard'><span className='icons'><AdobeXD/></span></a>
                                    <a href='https://ucceasambassadors.com'><span className='icons'><ExternalLink/></span></a>
                                    <a href='https://github.com/ceas-ambassadors/ceas-ambassadors-site'><span className='icons'><Github/></span></a>
                                    <a href='https://github.com/ceas-ambassadors/ceas-ambassadors-website'><span className='icons'><Github/></span></a>
                                </div>
                            </div>
                            <span className='content--project-description'>
                                <p>CEAS Ambassadors works for the College of Engineering admissions office as tour guides for incoming or prospective students visiting the University of Cincinnati. This site is used as a hub for ambassadors to sign up for tours, log attendance for meetings, train new ambassadors with resources about the college, and more! The new version of the site will use React.js, a more simple and iterative tool compared to Pug and vanilla Javascript that the old site utilizes.</p>
                            </span>
                        </div>
                        <div className='content--project-images'>
                            <ImageDisplay url={ceasAmbImg1} alt='Adobe XD Designs'>Adobe XD Designs</ImageDisplay>
                            <ImageDisplay url={ceasAmbImg2} alt='Current Site'>Current Site</ImageDisplay>
                            <ImageDisplay url={ceasAmbImg3} alt='New React Version'>New React Version</ImageDisplay>
                        </div>
                    </div>
                    <div className='content--project'>
                        <div className='content--project-text'> 
                            <div className='content--project-primary'>
                                <h3>Politic-Bee</h3>
                                <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>Hackathon project</p>
                                <p style={{ fontSize: '14px' }}>Skills: Angular, Figma, Microsoft Graph API’s</p>
                                <div className='icons-row'>
                                    <a href='https://www.figma.com/file/6paNE8x5kvMmJVhcg8KkuF/Politic-Bee?node-id=0%3A1'><span className='icons figma'><Figma/></span></a>
                                    <a href='https://hack.osu.edu/2020/live/winners.html'><span className='icons'><ExternalLink/></span></a>
                                    <a href='https://github.com/team-dad-dy/Politic-Bee'><span className='icons'><Github/></span></a>
                                </div>
                            </div>
                            <span className='content--project-description'>
                                <p>Winner of Hack Ohio 2020’s Microsoft Challenge, Politic-Bee is a web and mobile app meant to keep young people engaged in politics after the polarizing 2020 election. The app is meant to educate and unite for causes and issues by allowing users to create ‘campaigns’ that would, for example, rally people to support gender neutral bathrooms in the local schools. Users can donate to campaigns, subscribe to initiatives, and see what campaigns their local politicians support so they can get a better idea of which candidates they best align with.</p>
                            </span>
                        </div>
                        <div className='content--project-images'>
                            <ImageDisplay url={politicBee1} alt='Adobe XD Designs'>Adobe XD Designs</ImageDisplay>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content--section'>
                <h2 className='content--roles-title'>ROLES</h2>
                <div className='content--roles-role' style={{ marginTop: 0 }}>
                    <div className='content--roles-primary'>
                        <h3>UX Engineer Co-op</h3>
                        <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>January 2022 - Present</p>
                        <p style={{ fontSize: '14px' }}>IBM in Chicago, IL</p>
                    </div>
                    <div className='content--roles-secondary'>
                        <p>
                            At IBM, as a UXE, I’m working on fixing bugs for Carbon for IBM Products (our internal facing design system), 
                            collaborating with designers to grow their coding skills, and leading the front-end development for our internal 
                            product Sheldon. I spend most of my time working on my product team building out new features like a search filter, 
                            bookmarking capabilities, and micro-interactions or refining the existing UI in tangent with our designer and 
                            tech lead. My co-op has made me highly confident in <strong className='content--roles-bold'>React </strong> 
                            and has given me experience with <strong className='content--roles-bold'>Gatsby</strong> sites, 
                            <strong className='content--roles-bold'> open source development </strong>, 
                            <strong className='content--roles-bold'> InVision </strong>, and <strong className='content--roles-bold'>Airtable </strong>.
                        </p>
                        <p className='content--roles-skills'><strong className='content--roles-bold'>Skills: </strong>React, InVision, Gatsby, Open Source</p>
                    </div>
                </div>
                <div className='content--roles-role'>
                    <div className='content--roles-primary'>
                        <h3>Product & Design Co-op</h3>
                        <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>May 2021 - August 2021</p>
                        <p style={{ fontSize: '14px' }}>84.51 in Cincinnati, OH</p>
                    </div>
                    <div className='content--roles-secondary'>
                        <p>
                            As a P&D co-op on Meridian, I was introduced to several new concepts and technologies. 
                            Meridian, 84.51’s design system, was pretty new only being 2 years old. I was tasked with designing and 
                            building a new modal component. This included creating mock ups in <strong className='content--roles-bold'>Figma </strong> 
                            and getting feedback from designers and using user research, researching and composing guidelines 
                            to enforce, and imbedding the component in our library with <strong className='content--roles-bold'>Angular </strong> 
                            and <strong className='content--roles-bold'>Stencil.js </strong> (tests included). Along the way, I learned 
                            about design systems and their role in industry. My mentor taught me about <strong className='content--roles-bold'>design principles </strong> 
                            and how to conduct <strong className='content--roles-bold'>user research</strong>. I also got to 
                            <strong className='content--roles-bold'> product manage </strong> my intern project where I designed a 
                            <strong className='content--roles-bold'> Grafana </strong> dashboard to monitor 84.51’s 
                            applications’ health all while creating a plugin to include Meridian. I implemented Agile scrum on our team with 
                            ceremonies like stand-up, retro, and working session to ensure productivity. It was a great opportunity for me to 
                            grow as a leader and discover my passion for design and front-end development.</p>
                        <p className='content--roles-skills'><strong className='content--roles-bold'>Skills: </strong>Angular, Stencil,js, Figma, Leadership, User Research, Design Systems</p>
                    </div>
                </div>
                <div className='content--roles-role'>
                    <div className='content--roles-primary'>
                        <h3>Software Engineering Co-op</h3>
                        <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>August 2020 - December 2020</p>
                        <p style={{ fontSize: '14px' }}>84.51 in Cincinnati, OH</p>
                    </div>
                    <div className='content--roles-secondary'>
                        <p>On DataGazers, I revamped an end-to-end QA process to compare transaction source data to 
                            intermediate data source. Every week, my team would refine and manage the data load that 
                            would push large amounts of grocery data up to our commercial platform Stratum. My time 
                            on this rotation was spent accelerating processing time by enhancing old scripts into faster 
                            <strong className='content--roles-bold'> Python </strong> and <strong className='content--roles-bold'>bash</strong> 
                            jobs saving about 20 minutes a week. I coded and integrated automation for a new, more efficient 
                            QA process into 84.51 Stratum’s weekly data load process. Before I implemented fixes, the job was 
                            difficult to parse and debug and took the team a whole day to figure out since the entire process 
                            was an unorganized Juptyer notebook. After I split the jobs up, I neatly placed them into our automation 
                            software all while organizing and timing the process properly.</p>
                        <p className='content--roles-skills'><strong className='content--roles-bold'>Skills: </strong>Python, bash, Automation</p>
                    </div>
                </div>
                <div className='content--roles-role'>
                    <div className='content--roles-primary'>
                        <h3>Software Engineering Co-op</h3>
                        <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '8px 0px' }}>January 2020 - May 2020</p>
                        <p style={{ fontSize: '14px' }}>84.51 in Cincinnati, OH</p>
                    </div>
                    <div className='content--roles-secondary'>
                        <p>On my first co-op, I spent a lot of time shadowing data engineers and learning independently 
                            by playing around in <strong className='content--roles-bold'>Jupyter Notebooks </strong>. 
                            My team, Shake Your Foundations!, introduced me to <strong className='content--roles-bold'>Agile </strong>, 
                            specifically scrum, and I learned about the ceremonies and technology associated like stand-up, retro, 
                            <strong className='content--roles-bold'> Jira</strong>, and 
                            <strong className='content--roles-bold'> Confluence</strong>. At the end of my co-op, I made a major 
                            contribution working on <strong className='content--roles-bold'>SPC (statistical process control) checks </strong> 
                            for the forecast my team was working on, PULSE. I used <strong className='content--roles-bold'>Python </strong> 
                            and <strong className='content--roles-bold'>Spark </strong> to check thousands of records of incoming data 
                            against meta data to catch any bad data passing through.</p>
                        <p className='content--roles-skills'><strong className='content--roles-bold'>Skills: </strong>Python, Spark, Agile, Python, Airflow, Jupyter Notebooks, Data Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;