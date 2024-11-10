import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web development project using Next.js and Tailwind CSS.",
      link: "https://vercel.com/shasmeen-zahras-projects/new-milestone-05-by-shasmeen-hr5c",
      image: "/project.jpeg",
    },
    {
      title: "Project 2",
      description: "A web development project using Next.js and Tailwind CSS.",
      link: "https://vercel.com/shasmeen-zahras-projects/new-milestone-05-by-shasmeen-hr5c",
      image: "/project.jpeg",
    },
    {
      title: "Project 3",
      description: "A web development project using Next.js and Tailwind CSS.",
      link: "https://vercel.com/shasmeen-zahras-projects/milestone-3-by-shasmeen-zahra-fq95",
      image: "/project.jpeg",
    },
    {
      title: "Project 4",
      description: "A web development project using Next.js and Tailwind CSS.",
      link: "https://vercel.com/shasmeen-zahras-projects/milestone-3-by-shasmeen-zahra-fq95",
      image: "/project.jpeg",
    },
  ];

  return (
    <>
     <Header />
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.portfolioContainer}>
          <h2 className={styles.portfolioTitle}>My Portfolio</h2>
          <div className={styles.portfolioGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.portfolioCard}>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={300}
                  height={200}
                  className={styles.portfolioCardImage}
                />
                <div className={styles.portfolioCardContent}>
                  <h3 className={styles.portfolioCardTitle}>{project.title}</h3>
                  <p className={styles.portfolioCardDescription}>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.portfolioCardLink}
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
