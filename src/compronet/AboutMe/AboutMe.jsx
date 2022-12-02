import style from './AboutMe.module.css';
import linkedin from './../../../public/imgs/linkedin.png'
import gitHub from './../../../public/imgs/github.png'
import html5 from './../../../public/imgs/html5.svg'
import css3 from './../../../public/imgs/css3.svg'
import javascript from './../../../public/imgs/javascript.svg'
import reactImg from './../../../public/imgs/react.svg'
import nodedotjs from './../../../public/imgs/nodedotjs.svg'
import expressIcon from './../../../public/imgs/express.svg'
import mongoDbIcon from './../../../public/imgs/mongodb.svg'
import gitIcon from './../../../public/imgs/git.svg'
import bootstrapIcon from './../../../public/imgs/bootstrap.svg'
import muiIcon from './../../../public/imgs/mui.svg'
import tailwindcssIcon from './../../../public/imgs/tailwindcss.svg'

const AboutMe = () => {
  return (
    <>
      <section className={style['elementor-section']}>
        <div className={style.picArt}></div>
        <div className={style['elemtntor-container']}>
          <div className={style['elemtntor-columa']}>
            <div className={style['elementor-widget-wrap']}>
              <h2 className={style['elementor-heading-title']}>About (Me)</h2>

              <div className={style['elementor-icon-link']}>
                <a
                  href='https://www.linkedin.com/in/theerapol-khamwan-a9303a240/'
                  title='Linkedin'
                  target='_blank'
                >
                  <img
                    src={linkedin}
                    alt='img-Linkedin'
                    width='24px'
                    height='24px'
                  />
                </a>
                <a
                  href='https://github.com/Theerapol-khamwan'
                  title='GitHub'
                  target='_blank'
                >
                  <img
                    src={gitHub}
                    alt='img-GitHub'
                    width='24px'
                    height='24px'
                  />
                </a>
              </div>
              <p className={style['elementor-article-title']}>
                With a strong interest in Software Developers, I have studied
                UI/UX Front-End and Back-End design skills every time I work.
                I'm excited to learn new skills. And apply it to the assigned
                tasks. When entering, I look forward to participating in various
                offerings and improvements.
              </p>
            </div>
          </div>

          <div className={style['elemtntor-columa-skill']}>
            <div className={style['elementor-widget-wrap']}>
              <h2 className={style['elementor-heading-title-skills']}>
                MainSkills
              </h2>
              <div className={style.setIconSkills}>
                <h3>Front End</h3>

                <img
                  src={html5}
                  alt='HTML5'
                  width='48px'
                  height='48px'
                />
                <img
                  src={css3}
                  alt='CSS3'
                  width='48px'
                  height='48px'
                />
                <img
                  src={javascript}
                  alt='Javascript'
                  width='48px'
                  height='48px'
                />

                <img
                  src={reactImg}
                  alt='React'
                  width='48px'
                  height='48px'
                />
              </div>
              <div className={style.setIconSkills}>
                <h3>Back End</h3>

                <img
                  src={nodedotjs}
                  alt='Nodedotjs'
                  width='48px'
                  height='48px'
                />

                <img
                  src={expressIcon}
                  alt='Express'
                  width='48px'
                  height='48px'
                />

                <img
                  src={mongoDbIcon}
                  alt='Mongodb'
                  width='48px'
                  height='48px'
                />
              </div>
              <div className={style.setIconSkills}>
                <h3>More..</h3>
                <img
                  src={gitIcon}
                  alt='Git'
                  width='48px'
                  height='48px'
                />
                <img
                  src={bootstrapIcon}
                  alt='Bootstrap'
                  width='48px'
                  height='48px'
                />
                <img
                  src={muiIcon}
                  alt='mui'
                  width='48px'
                  height='48px'
                />
                <img
                  src={tailwindcssIcon}
                  alt='tailwindcss'
                  width='48px'
                  height='48px'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
