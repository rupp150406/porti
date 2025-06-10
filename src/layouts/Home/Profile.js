import profileImgPlaceholder from 'assets/profile-placeholder.jpg';

import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import myImage from 'assets/rupp.jpg';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Saya Fariz, saat ini terdaftar di {' '}
    <Link href="https://idn.ac.id">Politeknik IDN</Link> untuk mengejar gelar teknik di bidang Teknologi Informasi. Bidang keahlian saya dalam pengembangan web adalah tumpukan MERN. Sebagai pengembang otodidak, saya terus mencari cara untuk meningkatkan kemampuan. Saya memahami banyak hal dengan cepat, dan saya selalu ingin mempelajari sesuatu yang baru. Saya bekerja dengan baik dalam tim dan selalu bersedia membantu. Selain itu, saya juga seorang <b>Seniman/Fotografer</b>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Kirimi saya pesan
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[myImage, myImage]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me use my best pose and editing to make it look cool"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  {/* <use href={`${profileKatakana}#katakana-profile`} /> */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
