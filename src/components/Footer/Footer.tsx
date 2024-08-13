import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* <div className={}></div> */}
      <div className={styles.footer_left}>
        <h5> JV. </h5>
        <div>
          <a href="tel:4169612777">Phone: 416.961.2777</a>
          <a
            href="mailto:info@meridianartists.com?subject=Inquire%20Julien%20Verschooris"
            target="_blank"
            rel="noreferrer"
          >
            Email: info@meridianartists.com
          </a>
        </div>
        <p> &copy; 2023 - Julien Verschooris</p>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.contact}>
          <h5> Contact </h5>
          <div>
            <p> Meridian Artists</p>
            <p> A02-43 Britain Street </p>
            <p> Toronto, ON M5A 1R7 </p>
            <p> Canada</p>
          </div>
        </div>
        <div className={styles.contact_btn}>
          <div className={styles.button_container}>
            <a
              href="mailto:info@meridianartists.com?subject=Inquire%20Julien%20Verschooris"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.button_normal}>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
