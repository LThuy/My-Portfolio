import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../Style/PartsCSS/Timeline.scss";

const timelineData = [
  {
    type: "education",
    year: "2021 - 2022",
    title: "Freshmen in University",
    institution: "Ton Duc Thang University",
    description: "Specialized in Full-Stack Web Development.",
  },
  {
    type: "experience",
    year: "2022 - 2023",
    title: "Sophomore in University",
    institution: "Ton Duc Thang University",
    description: "Intensive training on HTML, CSS, JavaScript, and React.",
  },
  {
    type: "education",
    year: "2023 - 2024",
    title: "Junior in University",
    institution: "Ton Duc Thang University",
    description: "Worked on building responsive landing pages & dashboards.",
  },
  {
    type: "experience",
    year: "2024 - 2025",
    title: "Intern Web Developer/Final year in University",
    institution: "Ton Duc Thang University",
    description: "Developing dynamic web applications using React & Node.js.",
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
