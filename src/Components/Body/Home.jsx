import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../Style/BodyCSS/Home.scss";
import Timeline from "../Parts/Timeline";
import Projects from "../Parts/Projects";
import Contact from "../Parts/Contact";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPhp, 
  FaAws, FaGitAlt, FaServer, FaCogs, FaNetworkWired
} from "react-icons/fa";
import { SiMongodb, SiRedis, SiDotnet, SiMysql, SiPostman } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, desc: "Semantic & SEO-friendly structure" },
      { name: "CSS", icon: <FaCss3Alt />, desc: "Responsive design & animations" },
      { name: "JavaScript", icon: <FaJs />, desc: "ES6+, DOM manipulation, Async" },
      { name: "React.js", icon: <FaReact />, desc: "Component-based UI & Hooks" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, desc: "Backend APIs & Express.js" },
      { name: "PHP", icon: <FaPhp />, desc: "Server-side scripting & Laravel" },
      { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL database & Mongoose" },
      { name: "MySQL", icon: <SiMysql />, desc: "Relational DB & queries" },
      { name: ".NET", icon: <SiDotnet />, desc: "C# & ASP.NET web development" },
      { name: "Redis", icon: <SiRedis />, desc: "In-memory caching & session storage" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS S3", icon: <FaAws />, desc: "Cloud storage & secure file handling" },
      { name: "CloudFront", icon: <FaNetworkWired />, desc: "CDN & website acceleration" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, desc: "Version control & collaboration" },
      { name: "Postman", icon: <SiPostman />, desc: "API testing & automation" },
    ],
  },
];

function Home() {
  useEffect(() => {
    document.title = "Welcome to My Portfolio";
  }, []);

  const Section = ({ id, children, bgClass }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`portfolio-section ${bgClass}`}
      >
        <div className="section-content">{children}</div>
      </motion.section>
    );
  };

  return (
    <div className="portfolio-container">
      {/* 🔹 Hero Section */}
      <Section id="hero" bgClass="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Lê Thanh Huy</span>
            </h1>
            <p className="subtext">
            Creative Developer & Designer crafting beautiful web experiences.
            A senior student at Ton Duc Thang University, based in Ho Chi Minh City.
            Passionate about building modern, user-friendly, and interactive websites.
            Eager to learn new technologies and turn ideas into reality.
            </p>
            <a href="#contact" className="cta-btn">
              Let's Work Together
            </a>
          </div>

          {/* Right Image */}
          <motion.div
            className="hero-img-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="profile-2.jpeg" alt="Profile" className="hero-img" />
          </motion.div>
        </div>
      </Section>


      {/* 🔹 Skills Section */}
      <Section id="skills" bgClass="skills-section">
        <h2>My Skills</h2>
        <p className="skills-intro">
          A passionate developer with expertise in frontend, backend, cloud computing, and development tools.
        </p>

        {skills.map((group, index) => (
          <div key={index} className="skill-category">
            <h3>{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="skill-card"
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p className="skill-desc">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      { <Timeline />}

      {/* 🔹 Projects Section */}
      {/* <Section id="projects" bgClass="projects-section">
        <h2>My Work</h2>
        <div className="projects-grid">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src="/project1.jpg" alt="Project 1" />
            <h3>Portfolio Website</h3>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src="/project2.jpg" alt="Project 2" />
            <h3>Creative Landing Page</h3>
          </motion.div>
        </div>
      </Section> */}
      {<Projects/>}

      {/* 🔹 Contact Section */}
      {/* <Section id="contact" bgClass="contact-section">
        <h2>Get in Touch</h2>
        <p>Let's create something amazing together!</p>
        <a href="mailto:your.email@example.com" className="contact-btn">
          Contact Me
        </a>
      </Section> */}
      <Contact/>
    </div>
  );
}

export default Home;
