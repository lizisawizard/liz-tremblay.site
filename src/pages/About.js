import React from "react";
import Goon from "../assets/images/goon.png";
import GoonPizza from "../assets/images/About/GoonPizza.png";
import GoonMET from "../assets/images/About/GoonMET.png";
import GoonGarden from "../assets/images/About/GoonGarden.png";
import ChuckleSandwich from "../assets/images/About/ChuckleSandwich51.jpeg";
import Poppi from "../assets/images/About/Poppi.jpeg";
import GoonUCArticle from "../assets/images/About/GoonUCArticle.jpeg";

const About = () => {

  const jobData = [
    {
      company: "84.51°",
      role: "Software Engineer",
      date: "June 2023 - present",
      description:
        "Returning to our design system team, Meridian, I mainly focused on composable experiences and component accessibility. Meridian primarily uses Svelte and Sveltekit to deliver our component library and documentation site and playwright for testing. Some of my largest contributions thus far include redesigning a more efficient and collaborative contribution process, integrating axe-core into our testing to detect accessibility violations, and adding enhancements our Angular Table component like a column-level loading state and drag and drop support.",
    },
    {
      company: "IBM",
      role: "UX Engineer Co-op",
      date: "2022",
      description:
        "At IBM, I worked on two different teams in tandem. One was the Carbon for IBM Products team or “PAL” for short. On PAL, I primarily contributed motion to a number of icons and fixed various bugs in our open source repository. The other was building and supporting the web app Sheldon. I was able to deliver high value features to Sheldon such as search filtering and bookmarking. I also added motion with Framer Motion and CSS. Being at IBM exposed me to React.js and allowed me to grow pretty proficient in the framework.",
    },
    {
      company: "84.51°",
      role: "Product & Design Co-op",
      date: "June 2021 - August 2021",
      description:
        "I was on our design system team, Meridian, working on contributing the modal component to the component library. This project allowed to me to touch research, design, and development of a component. For research, I interviewed several stakeholders in product, business, and engineering doing AB testing and workflow observations. I delivered several variations of the modal in Figma after doing an audit with the team of the existing modals in our products. Lastly, I added the modal in code to our Stencil.js component library followed up by testing, live examples, and extensive guidelines and documentation. While working on the modal, I lead my intern team as their product manager and designer creating a Grafana dashboard to view the health of our various applications.",
    },
    {
      company: "84.51°",
      role: "Software Engineer Co-op",
      date: "August 2020 - December 2020",
      description:
        "On my rotation, I worked on a team (DataGazers) that pushed data up to 84.51˚'s commercial platform Stratum that's used by Kroger customers. For most of my rotation, I owned a project that touched the DataGazer's process from end to end. The project was a source to intermediate QA process redesign as the code we had in production previously was a hastily put together Jupyter notebook. The team identified that having a Jupyter notebook in production would be problematic for debug and management so I took on splitting out the parts of the notebook into numerous jobs and adding them back to our automated process. This co-op really delved into Python and bash scripting.",
    },
    {
      company: "84.51°",
      role: "Software Engineer Co-op",
      date: "January 2020 - April 2020",
      description:
        "My role as a software engineering co-op taught me how to use PySpark, understand SQL concepts, and operate within an agile team. I primarily worked on the baseline quality assurance (Statistical Process Control Checks) for the forecast my team was building. The forecast (Store PULSE) built predicted how busy Kroger stores may likely be on any given day. The results of Store PULSE ultimately feeds into other relevant forecasts. I built to the QA independently and orchestrated it myself with Airflow. I kept my progress tracked using Jira to ensure the team was aware of my standing with the QA.",
    },
  ];

  const educationData = [
    {
      degree: "B.S. in Computer Science",
      university: "University of Cincinnati",
      yearStart: "2018",
      yearEnd: "2023",
      description:
        "Graduated with a 3.5 GPA and various leadership experience including President of the College of Engineering and Applied Science Ambassadors program, Vice President of ACM-W, and Design Lead for RevolutionUC (our university’s largest hackathon).",
    },
  ];

  const certificateData = [
    {
      name: "Microsoft Mentorship Certificate",
      year: "2020",
    },
    {
      name: "Google UX Design Certificate ",
      year: "2024",
    },
  ];

  return (
    <>
      <div className="about">
        <div className="about__goon">
          <img
            className="goon"
            src={Goon}
            alt="Liz Tremblay Headshot"
          />
        </div>
        <div>
          <div className="about__intro about__section">
            <div className="about__intro-bio">
              <h2>introduction</h2>
              <p>Hi, I’m Liz Tremblay. I’m a software engineer based in NYC.</p>
              <p>
                My focus is on frontend development and design. I thrive in a
                collaborative environment where I can learn from others and lead
                courageously.
              </p>
              <p>
                At 84.51°, I work on our design system team contributing to our
                composable experiences efforts -- patterns, guidelines,
                component enhancements.
              </p>
              <p>
                Although I’m early in my career, I’m passionate about growing as
                a developer, designer, and as a person.
              </p>
            </div>
          </div>
          <div className="about__work about__section">
            <h2>work experience</h2>
            <div className="about__work-grid">
              {jobData.map((job) => (
                <div className="about__experience">
                  <h3 className="about__experience-title">
                    {job.role}, {job.company}
                  </h3>
                  <p className="about__experience-date">{job.date}</p>
                  <p className="about__experience-description">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="about__edu about__section">
            <h2>education</h2>
            {educationData.map((edu) => (
              <div className="about__edu-experience">
                <h3 className="about__experience-title">{edu.degree}</h3>
                <p className="about__experience-institute">{edu.university}</p>
                <p className="about__experience-date">
                  {edu.yearStart} - {edu.yearEnd}
                </p>
                <p className="about__experience-description">
                  {edu.description}
                </p>
              </div>
            ))}
            <div className="about__edu-experience">
              <h4 className="about__experience-title">Certificates</h4>
              {certificateData.map((cert) => (
                <p className="about__experience-description">
                  {cert.name} ({cert.year})
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about__outside about__section">
        {/* <div className="about__outside-background" /> */}
        <span></span>
        <span>
          <h2>outside of work</h2>
          <div className="about__gallery">
            <div className="about__galleryIndividual">
              <img
                className="about__gallery-img"
                src={GoonMET}
                alt="Liz looking at a painting at the MET in NYC"
              />
              <p>
                When I’m not working my 9-5, you can find me completing side
                quests or traveling.
              </p>
            </div>
            <div className="about__galleryIndividual">
              <img
                className="about__gallery-img"
                src={GoonPizza}
                alt="Liz with mouth gaping, looming over a slice of pizza"
              />
              <p>
                I’m a major foodie, so NYC is the perfect place to satisfy my
                taste for adventure. My go-to recommendation for food in NYC is
                Balthazar.
              </p>
            </div>
            <div className="about__galleryIndividual">
              <img
                className="about__gallery-img"
                src={GoonGarden}
                alt="Liz looking into a garden at the MET Cloisters"
              />
              <p>
                I’ve always loved journalling, so it was inevitable I’d start my
                own blog. Read about my thoughts and feelings{" "}
                <a href="/blog">here</a> :)
              </p>
            </div>
          </div>
        </span>
      </div>
      <div className="about__coolThings about__section">
        <span></span>
        <span>
        <h2>things i find cool</h2>
        <div className="about__gallery">
          <div className="about__galleryIndividual">
            <img
              className="about__gallery-img"
              src={ChuckleSandwich}
              alt="Episode #51 banner from Youtube with Charlie, Conner, and Ted on the cover"
            />
            <p>
              I like to listen to podcasts when I work and one of my favorites
              is Chuckle Sandwich. Episode #51 is an absolute banger. It makes
              me laugh every time.
            </p>
          </div>
          <div className="about__galleryIndividual">
            <img
              className="about__gallery-img"
              src={Poppi}
              alt="Four cans of Poppi soda"
            />
            <p>
              My most recent obsession has been Poppi. No only does it taste
              good, but its healthy and has adorable packaging. Please try the
              cherry flavor if you haven’t already!
            </p>
          </div>
          <div className="about__galleryIndividual">
            <img
              className="about__gallery-img"
              src={GoonUCArticle}
              alt="Liz holding her laptop for UC marketing campaign"
            />
            <p>
              When I was in college, I did an interview with the university
              marketing team about my co-op at IBM. You can find my photo in
              Terminal B at CVG airport as a result :)
            </p>
          </div>
        </div>
        </span>
      </div>
    </>
  );
};

export default About;
