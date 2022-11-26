import Spline from '@splinetool/react-spline';
import style from './Spline3D.module.css';

export default function Spline3D() {
  return (
    <>
      <section className={style.blackDrop}>
        <h3 className={style.h3Name}>/. Theerapol ./</h3>
        <div className={style.cutOp}>
          <Spline
            className={style.spline}
            scene='https://prod.spline.design/e6-s9VqKxelAxoNr/scene.splinecode'
          />
        </div>
      </section>
    </>
  );
}
