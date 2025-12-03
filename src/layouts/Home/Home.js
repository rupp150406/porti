import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';

import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';

import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';

import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

import hmsPreview from 'assets/hms-preview.png';
import cicd from 'assets/cicd.png';
import image from 'assets/image.jpg';
import stockDash from 'assets/stock-dashboard.png';
import stockDash2 from 'assets/stockDash2.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Mahasiswa', 'fotografer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Muhammad Fariz — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Aplikasi Blogin"
        description="Blogin App adalah aplikasi seluler Flutter yang dirancang untuk memudahkan pembuatan, berbagi, dan penggunaan konten blog. Aplikasi ini menggunakan Hive untuk penyimpanan lokal yang efisien dan responsif."
        buttonText="Lihat Aplikasi"
        buttonLink="/projects/blogin"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [stockDash],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [stockDash2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      
      <ProjectSummary
        id="project-2"
        // alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="chiori butique : Laravel E-Commerce WebApp"
        description="Chiori Butique adalah web aplikasi e-commerce berbasis Laravel yang dibuat untuk mengelola produk, brand, user, dan transaksi dengan lebih terstruktur. WebApp ini mencakup sistem autentikasi, dashboard admin, manajemen data dengan CRUD, serta fitur upload dan pengolahan gambar untuk kebutuhan katalog toko online."
        buttonText="Kunjungi repositori"
        buttonLink="https://github.com/rupp150406/chiori-butique"
        model={{
          type: 'laptop',
          alt: 'landing page',
          textures: [
            {
              srcSet: [image],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Fariz Risol : Food Catalog Website "
        description="Situs web katalog makanan khusus untuk Fariz Risol, yang memamerkan berbagai produk risol mereka yang lezat. Situs ini menyediakan platform yang mudah dijelajahi bagi pelanggan untuk menjelajahi berbagai rasa dan isian."
        buttonText="Kunjungi Website"
        buttonLink="https://fariz-risol.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Visual description of the pipeline workflow',
          textures: [
            {
              srcSet: [cicd],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Tikety : Ticket Booking Website"
        description="Tikety adalah platform lengkap untuk pemesanan tiket yang mudah, tersedia sebagai situs web. Tikety menawarkan cara mudah bagi pengguna untuk menelusuri, memilih, dan membeli tiket untuk berbagai acara dan layanan."
        buttonText="Kunjungi repositori"
        buttonLink="https://github.com/rupp150406/tiket-wisata-ori"
        model={{
          type: 'laptop',
          alt: 'Displaying the home page of the website.',
          textures: [
            {
              srcSet: [hmsPreview, hmsPreview],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
