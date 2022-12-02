import style from './AboutMe.module.css';


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
                    src='./../../public/imgs/linkedin.png'
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
                    src='./../../public/imgs/github.png'
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
                  src='./../../public/imgs/html5.svg'
                  alt='HTML5'
                  width='48px'
                  height='48px'
                />
                <img
                  src='./../../public/imgs/css3.svg'
                  alt='CSS3'
                  width='48px'
                  height='48px'
                />
                <img
                  src='./../../public/imgs/javascript.svg'
                  alt='Javascript'
                  width='48px'
                  height='48px'
                />

                <img
                  src='./../../public/imgs/react.svg'
                  alt='React'
                  width='48px'
                  height='48px'
                />
              </div>
              <div className={style.setIconSkills}>
                <h3>Back End</h3>

                <img
                  src='./../../public/imgs/nodedotjs.svg'
                  alt='Nodedotjs'
                  width='48px'
                  height='48px'
                />

                <img
                  src='./../../public/imgs/express.svg'
                  alt='Express'
                  width='48px'
                  height='48px'
                />

                <img
                  src='./../../public/imgs/mongodb.svg'
                  alt='Mongodb'
                  width='48px'
                  height='48px'
                />
              </div>
              <div className={style.setIconSkills}>
                <h3>More..</h3>
                <img
                  src='./../../public/imgs/git.svg'
                  alt='Git'
                  width='48px'
                  height='48px'
                />
                <img
                  src='./../../public/imgs/bootstrap.svg'
                  alt='Bootstrap'
                  width='48px'
                  height='48px'
                />
                <img
                  src='./../../public/imgs/mui.svg'
                  alt='mui'
                  width='48px'
                  height='48px'
                />
                <img
                  src='./../../public/imgs/tailwindcss.svg'
                  alt='mui'
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
