import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../Style/PartsCSS/Projects.scss";

const githubUsername = "LThuy"; // Change this to your GitHub username
const token = process.env.REACT_APP_TOKEN;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const fetchRepos = async () => { 
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${token}`, // Send token in headers
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>My GitHub Projects</h2>
      <p>Here are some of the latest projects I've worked on.</p>
      <div className="projects-list">
        {repos.length > 0 ? (
          repos.slice(0, 10).map((repo) => (
            <motion.div
              key={repo.id}
              className="project-item"
              whileHover={{ scale: 1.05 }}
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description available."}</p>
                <span>⭐ {repo.stargazers_count} | 🔁 {repo.forks_count}</span>
              </a>
            </motion.div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
