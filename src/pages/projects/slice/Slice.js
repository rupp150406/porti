import detailsLarge from 'assets/details-large.png';                                                //details-large.png
import detailsPlaceholder from 'assets/details-placeholder.png';
import details from 'assets/details.png';                                                           //details.png
import bloginLarge from 'assets/blogin-large.jpg';                                                        //blogin-large.jpg
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import blogin from 'assets/blogin.jpg';                                                                   //blogin.jpg
import kontenLarge from 'assets/Konten-large.png';                                              //Konten-large.png
import kontenPlaceholder from 'assets/konten-placeholder.jpg';
import konten from 'assets/Konten.png';                                                         //Konten.png
import bloginBackgroundLarge from 'assets/blogin-background-large.jpg';                                      //blogin-background-large.jpg
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import bloginBackground from 'assets/blogin-background.jpg';                                                 //blogin-background.jpg
import expansiPlaceholder from 'assets/expansi-placeholder.jpg';
import expansi from 'assets/expansi.jpg';                                                                  //expansi.jpg
import blogLarge from 'assets/blog-large.png';                                                            //blog-large.png
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import blog from 'assets/blog.png';                                                                         //blog.png
import HomeLarge from 'assets/Home-large.jpg';                                                              //Home-large.jpg
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import Home from 'assets/Home.jpg';                                                                         //Home.jpg
import altLarge from 'assets/alt-large.png';                                                        //alt-large.png
import altPlaceholder from 'assets/alt-placeholder.jpg';
import alt from 'assets/alt.png';                                                                   //alt.png
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta'; 
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Blogin.';
const description1 =
  'Aplikasi latihan Flutter yang awalnya sederhana, lalu berkembang menjadi platform blogging mobile dengan fokus pada pengalaman menulis yang cepat, ringan, dan sepenuhnya dapat diakses secara offline.';
const description2 =
  'Proyek ini saya buat untuk memahami arsitektur offline-first, pengelolaan data lokal dengan Hive, serta merancang antarmuka penulisan yang ringkas namun nyaman digunakan.';
const roles = ['Flutter Development', 'UI Implementation', 'Local Storage Engineering'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={[description1,description2]} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={bloginBackground}
          srcSet={`${bloginBackground.src} 1280w, ${bloginBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={
            <>
              {description1}  
              <br />
              <br /> {/* ini “gap” di antara dua kalimat */}
              {description2}
            </>
          }
          url="https://github.com/rupp150406/Blogin/releases/download/v2.0.0/blogin.apk"
          roles={roles}
          secondaryUrl="https://github.com/rupp150406/Blogin/releases/download/v3.0.0/blogin-app.apk"
          // secondaryLabel bisa di-skip kalau mau pakai default "Download Offline Version"
          // secondaryLabel="Download Offline Version"
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[blogin, bloginLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Pada tahap awal pengembangan, saya berfokus pada membangun fondasi aplikasi melalui perancangan struktur data, 
                tampilan daftar postingan, serta editor penulisan dasar. Seluruh proses dirancang agar alurnya terasa ringan dan 
                mudah digunakan. Pengguna dapat menulis artikel, menambahkan gambar melalui Image Picker, 
                serta menyimpan konten secara lokal menggunakan Hive tanpa memerlukan koneksi internet.
              </ProjectSectionText>
              <ProjectSectionText>
                Dengan pendekatan offline-first ini, aplikasi tetap konsisten dan dapat diakses kapan pun pengguna membutuhkannya.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[Home, HomeLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[blog, blogLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>  
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                Setelah fitur utama berfungsi dengan baik, 
                saya mulai memperbaiki pengalaman pengguna dengan menata ulang antarmuka agar lebih terstruktur dan mudah dipahami.
                Editor penulisan dibuat sesederhana mungkin sehingga proses menulis tetap terasa alami tanpa hambatan yang tidak perlu. 
                Pada tahap pengembangan sebelumnya, saya sempat menguji mode online yang terhubung ke API kolaboratif, 
                namun karena lingkungan server tersebut sudah tidak aktif, mode tersebut saya jadikan catatan pengembangan. 
                Fokus rilis yang digunakan saat ini tetap berada pada mode offline yang stabil dan dapat diandalkan.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[alt, altLarge]}
              placeholder={altPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[konten, kontenLarge]}
                  placeholder={kontenPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[details, detailsLarge]}
                  placeholder={detailsPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Setiap postingan dilengkapi dengan informasi waktu dan kategori untuk membantu pengguna menjaga struktur konten tetap teratur. 
                Proses penambahan gambar melalui Image Picker dibuat sederhana dan intuitif, 
                sehingga pengalaman menulis blog terasa lebih natural dan tidak mengganggu alur pengguna.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Blogin berkembang dari sebuah proyek latihan Flutter menjadi aplikasi blogging offline-first yang ringan, 
                cepat, dan dapat diandalkan tanpa koneksi internet. 
                Melalui proses ini, saya memperoleh pemahaman yang lebih mendalam mengenai pengelolaan data lokal, 
                perancangan antarmuka mobile yang sederhana, serta pengembangan fitur inti yang berfokus pada kenyamanan pengguna.
                Meskipun mode online yang sebelumnya terhubung ke API tidak lagi aktif, 
                tahap tersebut memberikan pengalaman berharga dalam mempelajari integrasi layanan eksternal dan arsitektur aplikasi yang terhubung. 
                Setelah itu, saya memusatkan pengembangan pada penyempurnaan mode offline hingga mencapai rilis yang stabil dan siap digunakan.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={expansi}
              placeholder={expansiPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
