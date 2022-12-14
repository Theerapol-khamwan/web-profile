import React from 'react';
import style from '../compronet/SomeBuilt02.module.css';
import jammming from './../../../../public/imgs/Jammming.png'

const SomeBuilt02 = () => {
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
                <h3 className={style.titleProject}>Jammming Project Built</h3>
                <div className={style.descriptionProject}>
                  <p>
                    The web is about finding songs that we like. Then add your
                    favorite songs to the playlist channel and send the playlist
                    to id Spotify
                  </p>
                </div>
                <ul className={style.techListProject}>
                  <li>React</li>
                  <li>Spotify API</li>
                </ul>
                <div className={style.linksProject}>
                  <a
                    href='https://github.com/Theerapol-khamwan/Test-Jammming-Function01'
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
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <title>GitHub</title>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>
                  <a
                    href='https://jamming-miniproject-01.pages.dev/'
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
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                href='https://jamming-miniproject-01.pages.dev/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className={style.imageWrapper}>
                  <picture>
                    <img src={jammming} />
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

export default SomeBuilt02;
