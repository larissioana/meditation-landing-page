import styles from './meditationShowcase.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const students = [
    img1,
    img2,
    img3,
    img4,
    img5
];

const MeditationShowcase = () => {
    return (
        <div className={styles.meditationShowcaseContainer}>
            <div className={styles.flexContainer}>
                <h2 className={styles.subtitle}>878 +</h2>
                <div className={styles.arrow}>
                    <span className="material-symbols-outlined">
                        call_made
                    </span>
                </div>
            </div>
            <p className={styles.text}>More than 878 students are meditating</p>
            <div className={styles.imgContainer}>
                {
                    students.map((student, index) => {
                        return <LazyLoadImage key={index}
                            effect="blur" style={{ marginTop: index % 2 === 0 ? '7px' : '0', marginBottom: index % 2 === 0 ? '0' : '10px' }} className={styles.student} alt="students" width={50} height={50} src={student} />
                    })
                }
            </div>
        </div>
    )
};

export default MeditationShowcase;
