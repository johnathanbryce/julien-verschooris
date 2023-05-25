import styles from './Footer.module.css'

function Footer() {
  return (
    <section className={styles.footer} id="contact">
      {/* <div className={}></div> */}
      <div className={styles.footer_left}>
        <h5> JV. </h5>
        <div>
          <a href="tel:4169612777"> Phone: 416.961.2777</a>
          <a href="mailto:info@meridianartists.com?subject=Inquire%20Julien%20Verschooris" target="_blank" rel="noreferrer"> Email: info@meridianartists.com </a>
        </div>
        <p> &copy; 2023 - Julien Verschooris</p>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.contact}>
           <h5> Contact </h5>
           <div>
            <p> Meridian Artists</p>
            <p> Courtenay Bainbridge </p>
            <p> 349 Carlaw Avenue </p>
            <p> Toronto, Canada</p>
           </div>
        </div>
        <div className={styles.contact_btn}>
            <div className={styles.button_container} >
              <a href="mailto:info@meridianartists.com?subject=Inquire%20Julien%20Verschooris" target="_blank" rel="noreferrer">
                <button className={styles.button_normal}>Contact</button>
              </a> 
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Footer