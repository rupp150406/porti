import sliceAnnotationLarge from 'assets/details-large.png';                                                //details-large.png
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/details.png';                                                           //details.png
import sliceAppLarge from 'assets/blogin-large.jpg';                                                        //blogin-large.jpg
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/blogin.jpg';                                                                   //blogin.jpg
import sliceBackgroundBarLarge from 'assets/Konten-large.png';                                              //Konten-large.png
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/Konten.png';                                                         //Konten.png
import sliceBackgroundLarge from 'assets/blogin-background-large.jpg';                                      //blogin-background-large.jpg
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/blogin-background.jpg';                                                 //blogin-background.jpg
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/expansi.jpg';                                                                  //expansi.jpg
import sliceSidebarAnnotationsLarge from 'assets/blog-large.png';                                           //blog-large.png
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/blog.png';                                                      //blog.png
import sliceSidebarLayersLarge from 'assets/Home-large.jpg';                                                //Home-large.jpg
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/Home.jpg';                                                           //Home.jpg
import sliceSlidesLarge from 'assets/alt-large.png';                                                        //alt-large.png
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/alt.png';                                                                   //alt.png
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
  'Platform blogging mobile dengan dua mode offline-first dan online terhubung yang dirancang untuk mempermudah pengguna menulis, mengatur, dan mengelola konten di berbagai kondisi.';
const description2 =
  'Rilis yang tersedia saat ini berfokus pada mode offline yang sepenuhnya berjalan menggunakan penyimpanan lokal, sementara versi online sebelumnya bergantung pada API kolaboratif yang kini sudah tidak aktif';
const roles = ['Flutter Development', 'UI Implementation', 'Local Storage Engineering'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={[description1,description2]} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
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
        />
        
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
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
                Blogin App menghadirkan alur penulisan dan pengelolaan konten yang terstruktur melalui fitur pembuatan postingan, 
                pengaturan kategori, serta dukungan penyimpanan lokal. Pengguna dapat menulis artikel, menambahkan gambar, 
                dan mengatur kategori sepenuhnya tanpa koneksi internet berkat integrasi Hive.
              </ProjectSectionText>
              <ProjectSectionText>
                Pada versi online sebelumnya, postingan dapat dipublikasikan langsung melalui API terhubung. Namun karena lingkungan server tidak lagi aktif, 
                rilis saat ini berfokus pada mode offline yang tetap memberikan pengalaman menulis yang cepat, sederhana, dan dapat diandalkan.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
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
                Blogin App dirancang agar proses penulisan tetap sederhana dan terfokus. Tampilan daftar postingan dibuat ringkas sehingga pengguna dapat melihat, 
                membuka, dan mengelola tulisan mereka dengan cepat. Kategori digunakan untuk mengelompokkan konten agar lebih mudah diatur, 
                terutama pada mode offline yang mengandalkan penyimpanan lokal.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
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
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
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
                Blogin App memberikan pengalaman menulis yang cepat, ringan, dan selalu dapat diakses berkat penyimpanan lokal Hive. 
                Mode offline memungkinkan pengguna membuat serta mengatur postingan tanpa bergantung pada koneksi internet. 
                Pengelolaan kategori membantu menjaga struktur konten tetap rapi, 
                sementara integrasi autentikasi email pada versi online sebelumnya menjadi fondasi pengembangan fitur keamanan di masa depan.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
