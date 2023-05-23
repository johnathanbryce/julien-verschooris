import styles from './Footer.module.css'

function Footer() {
  return (
    <section className={styles.footer} id="contact">
      {/* <div className={}></div> */}
      <div className={styles.footer_left}>
        <h5> JV. </h5>
        <div>
          <p> Phone: 416.961.2777</p>
          <p> Email: info@meridianartists.com </p>
        </div>
        <p> Copywright 2023 &copy; All Rights Reserved</p>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.contact}>
           <h5> Contact </h5>
           <div>
            <p> Meridian Artists</p>
            <p> Kathrine Pavoni & Courtenay Bainbridge </p>
            <p> 349 Carlaw Avenue </p>
            <p> Toronto, Canada</p>
           </div>
        </div>
        <div className={styles.other}>
          <h5> Other Links </h5>
          <div>
            <p> Social</p>
            <p> Contact </p>
            <p> Privacy Policy </p>
            <p> Terms </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer