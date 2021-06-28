/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
      </Head>

      <img
        className={styles.profile}
        src="/me.jpg"
        alt="Lucas Jantsch Guedes"
      />
      <span>Lucas Jantsch Guedes</span>
      <p>Backend Developer</p>
      
      <section>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/dev_radhy"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/DevRadhy"><img src="/icons/github.svg" alt="Github" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-jantsch-guedes/"><img src="/icons/linkedin.svg" alt="Linkedin" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dev.radhy/"><img src="/icons/instagram.svg" alt="Instagram" /></a>
      </section>
    </div>
  )
}
