import React from 'react'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import styles from './Nominee.module.css'
// internal assets
import nominee from '../../../../public/images/nominee.png'


function Nominee() {
  return (
      <Layout>
        <section className={styles.nominee}>
          <div className={styles.image_container}>
            <Image
              className={styles.casma_image}      
              src={nominee}
              alt="the icon of the CASMA Nominee 2022 award"
            />
          </div>
          <div className={styles.text_container}>
            <h3> Nominee for best original score for a documentary feature film</h3>
            <h4> Coextinction 2022</h4>
          </div>
        </section>
      </Layout>

  )
}

export default Nominee