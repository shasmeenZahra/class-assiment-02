import Header from "../components/Header";
import "../globals.css";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "./contact.module.css"; // Import CSS module

interface contactProps {
  contactImage?: string; // Optional prop to pass a custom image URL if needed
}

const Contact: React.FC<contactProps> = ({ contactImage = "/contact.png" }) => {
  return (
    <div className={styles.contactContainer}>
      <Header />

      <div className={styles.contactContent}>
        <div className={styles.contactImage}>
          <Image src={contactImage} width={500} height={200} alt="Contact" className={styles.image} />
        </div>

        <main className={styles.contactMain}>
          <h2 className={styles.contactHeading}>Contact Me</h2>
          <form className={styles.contactForm}>
            <div className={styles.contactCard}>
              <label>Name</label>
              <input type="text" className={styles.contactInput} />
            </div>
            <div className={styles.contactCard}>
              <label>Email</label>
              <input type="email" className={styles.contactInput} />
            </div>
            <div className={styles.contactCard}>
              <label>Message</label>
              <textarea className={styles.contactInput} rows={4} />
            </div>
            <button type="submit" className={styles.contactButton}>
              Send Message
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
