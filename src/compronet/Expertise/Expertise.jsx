import React from 'react';
import style from './Expertise.module.css';

const Expertise = () => {
  return (
    <>
      <section className={style['elementor-section']}>
        <div className={style['elemtntor-container']}>
          <div className={style['elemtntor-columa']}>
            <div className={style['elemtntor-widget-warp']}>
              <h1 className={style['elementor-heading-title']}>My Expertise</h1>
              <div className={style['elementor-all-card']}>

                <div className={style.cardExpertise}>
                  <div className={style.setPositionCard}>
                    <h2>Generation Software Developer Bootcamp</h2>
                    <p className={style.cardTextArticle}>
                      Learned how to build web applications from React as
                      front-end, Node.js as back end, and MongoDB as a Database
                      Learned essential skills for switching careers, such as
                      growth mindset, communication, agile, and teamwork Final
                      Project: MERN Stack CRUD Project
                    </p>
                  </div>
                </div>

                <div className={style.cardExpertise}>
                  <div className={style.setPositionCard}>
                    <h2>UX/UI - Technologyflybird Group</h2>
                    <p className={style.cardTextArticle}>
                      Design UX/UI in Crypto currency trading websites and build
                      web responsiveness. Using HTML 5, CSS bootstrap 5, js.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
