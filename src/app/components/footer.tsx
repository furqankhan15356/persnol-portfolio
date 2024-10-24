// components/Footer.js
import React from "react";
import styles from "../footer.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a href="https://github.com/search?q=furqankhan15356&type=repositories" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/furqan-k-44991231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 FURQAN KHAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;