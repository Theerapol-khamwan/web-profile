import React from 'react';
import style from '../compronet/SomeBuilt02.module.css';

const SomeBuilt03 = () => {
  return (
    <>
      <section className={style.sectionSomeBuilt}>
        <ul className={style.uiListProject}>
          <li className={style.liLitstProject}>
            <div className={style.contentProject}>
              <div>
                <p className={style.overlineProject}>
                  Generation Software Developer. Bootcamp
                </p>
                <h3 className={style.titleProject}>
                  Find Your Hat Challenge Project
                </h3>
                <div className={style.descriptionProject}>
                  <p>
                    In this project I made a game using JavaScript. It's a hat
                    collecting game and there are obstacles making it difficult
                    to collect hats.
                  </p>
                </div>
                <ul className={style.techListProject}>
                  <li>JavaScript</li>
                </ul>
                <div className={style.linksProject}>
                  <a
                    href='https://github.com/Theerapol-khamwan/find-your-hat-project-game'
                    aria-label='GitHub link'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='feather feather-github'
                    >
                      <title>GitHub</title>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>
                  <a
                    href='#'
                    aria-label='External link'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='feather feather-external-link'
                    >
                      <title>External Link</title>
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.imgProject}>
              <a
                href='https://github.com/Theerapol-khamwan/exercise-tracker-website'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className={style.imageWrapper}>
                  <picture>
                    <img src='./../../public/imgs/findYourHat.png' />
                  </picture>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SomeBuilt03;
