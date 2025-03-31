import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../Style/PartsCSS/Timeline.scss";

const timelineData = [
  {
    type: "education",
    year: "2018 - 2022",
    title: "Bachelor's in Computer Science",
    institution: "XYZ University",
    description: "Specialized in Full-Stack Web Development & UI/UX Design.",
  },
  {
    type: "experience",
    year: "2022 - Present",
    title: "Frontend Developer",
    institution: "Tech Solutions Inc.",
    description: "Developing dynamic web applications using React & Node.js.",
  },
  {
    type: "education",
    year: "2017 - 2018",
    title: "Web Development Bootcamp",
    institution: "Online Course",
    description: "Intensive training on HTML, CSS, JavaScript, and React.",
  },
  {
    type: "experience",
    year: "2021 - 2022",
    title: "Intern Web Developer",
    institution: "Startup Hub",
    description: "Worked on building responsive landing pages & dashboards.",
  },
];

const TimelineItem = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${item.type}`}
      initial={{ opacity: 0, x: item.type === "education" ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.type === "education" ? -100 : 100 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>
        <h3>{item.title}</h3>
        <h4>{item.institution}</h4>
        <p>{item.description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2>My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
