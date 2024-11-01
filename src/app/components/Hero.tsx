// Hero.tsx
import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  profileImage?: string; // Optional prop to pass a custom image URL if needed
}

const Hero: React.FC<HeroProps> = ({ profileImage = "/profile4.png" }) => (
  <section className={styles.hero}>
    <div className={styles.left}>
      <h1 className={styles.hello}>Hello</h1>
      <h2 className={styles.heading}>I'm Shasmeen Zhara </h2>
      <h2 className={styles.subheading}>Frontend Developer</h2>
      <p>
        "Hello! I’m Shasmeen Zahra, a passionate frontend developer dedicated to
        creating intuitive, engaging, and visually stunning user experiences.
        With a strong foundation in HTML, CSS, JavaScript, and frameworks like
        React, I bring ideas to life through responsive, accessible, and modern
        web applications. My goal is to combine creativity with functionality,
        ensuring every project is both beautiful and user-friendly.
      </p>
    </div>
    <div className={styles.right}>
      <div>
        <Image
          src={profileImage}
          alt="Profile image of Shasmeen Zahra"
          height={200}
          width={460}
          className={styles.img}
        />
      </div>
    </div>
  </section>
);

export default Hero;
