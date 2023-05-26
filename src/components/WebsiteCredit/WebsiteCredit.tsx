import styles from './WebsiteCredit.module.css';

function WebsiteCredit() {
  return (
    <div className={styles.credit}>
      <p className={styles.dev_promo}> designed by <a href="https://www.linkedin.com/in/anthony-p-bb4322133/" target="_blank" rel="noreferrer"> anthony pezarro </a></p>
      <p className={styles.dev_promo}> developed by <a href="https://johnbrycewebdevelopment.com/" target="_blank" rel="noreferrer"> johnathan bryce </a></p>
    </div>
  )
    
}

export default WebsiteCredit