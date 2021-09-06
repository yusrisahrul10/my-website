import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { WorkItems, EducationItems } from "../../data/_About";
import clsx from "clsx";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b>
        <br />
        <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="About" description={siteConfig.tagline}>
        <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">Tentang Saya</h2>
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/profile.jpg")} />
              </div>
              <div className="col col--9">
                <h2>Halo,</h2>
                <p>
                  Perkenalkan nama saya Yusri Sahrul, saya adalah <i>fresh graduate</i> dan
                  seorang <i>software engineer</i> yang memiliki pengalaman di Android Development
                  sejak tahun 2018.
                </p>
                <p>
                  Saya merupakan sarjana{" "}
                  <a href="http://if.unikom.ac.id/">
                    Teknik Informatika
                  </a>{" "}
                  di{" "}
                  <a href="https://unikom.ac.id/">
                    Universitas Komputer Indonesia
                  </a>
                  . Semasa kuliah, saya memulai pengalaman di bidang Android Developmnet
                  dengan bergabung di {" "}
                  <a href="https://sites.google.com/view/dscunikom/about-dsc">
                    Google Developer Student Club UNIKOM
                  </a>
                  , sebagai Core Team periode 2018 sampai 2019.{" "}
                  Bersama Lead, saya turut membantu me-<i>manage</i> seminar
                  dan <i>workshop</i> yang diadakan, serta melatih kemampuan <i>hard skill</i> maupun <i>softskill</i>.
                </p>
                <p>
                  Sebelum lulus, saya memulai perjalanan karir profesional saya bekerja di {" "}
                  <a href="https://datadigi.id/">Datadigi Indonesia</a> Sebagai Android Developer selama 1 tahun.
                </p>
              </div>
            </div>
            <div id="experience" className="row padding-vert--xl">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorWarning">Pengalaman</h2>
              </div>
              <div className="col col--9">
                {WorkItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row padding-vert--xl">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorWarning">Pendidikan</h2>
              </div>
              <div className="col col--9">
                {EducationItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;