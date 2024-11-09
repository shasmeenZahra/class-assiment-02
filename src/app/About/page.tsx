// pages/about.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/portfolio";
import Image from "next/image";
import styles from "./about.module.css";

interface aboutProps {
  profileImage?: string; // Optional prop to pass a custom image URL if needed
}

const About: React.FC<aboutProps> = ({ profileImage = "/about.png" }) => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.aboutSection}>
          <div className={styles.imageContainer}>
            <Image
              src={profileImage}
              alt="Profile Image"
              width={600}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <h2>About Me</h2>
            <p>
              I’m a web developer passionate about creating beautiful,
              responsive websites. Hello! I’m a passionate web developer with a
              keen eye for design and a love for clean, efficient code. I thrive
              on creating intuitive digital experiences that bring ideas to
              life.
            </p>
            <p>
              With a strong foundation in web development and a creative
              approach to problem-solving, I’m constantly exploring new
              technologies to stay at the forefront of innovation in my field.
              My journey in tech is driven by a curiosity to learn and a
              dedication to delivering quality work.
            </p>
            <p>
              Every project is an opportunity to craft something unique and
              meaningful. Beyond code, I’m a believer in continuous growth,
              whether it’s through learning new skills, collaborating with
              others, or pushing the boundaries of what’s possible in web
              development. I’m excited to connect and work with others who share
              a passion for creating exceptional digital experiences!
            </p>
          </div>
        </div>
      </main>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default About;
