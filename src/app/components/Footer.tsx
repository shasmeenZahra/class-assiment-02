// components/Footer.js
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Contact Information</h3>
          <p>Email: shasmeenasim@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: karachi ( pakistan )</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          
          <div className={styles.socialLinks}>
           <a href="#" aria-label="Facebook" className={styles.socialLink}>Facebook</a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}>Twitter</a>
           <a href="#" aria-label="Instagram" className={styles.socialLink}>Instagram</a>
          <a href="#" aria-label="LinkedIn" className={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy;  Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
