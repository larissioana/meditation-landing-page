import styles from './header.module.css';
import yoga from '../../assets/yoga.png';
import MeditationShowcase from '../meditationShowcase/MeditationShowcase';
import Feature from '../feature/Feature';
import HeaderDescription from '../headerDescription/HeaderDescription';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.headerLeft}>
                <HeaderDescription />
            </div>
            <div className={styles.middle}>
                <h1 className={styles.title}>Start
                    <span className={styles.bgText}> Meditating</span>
                </h1>
                <LazyLoadImage src={yoga} alt="yoga" effect="blur" className={styles.headerImg} />
                <div className={styles.bg}></div>
                <div className={`${styles.bg} ${styles.right}`}></div>
            </div>
            <div className={styles.headerRight}>
                <MeditationShowcase />
                <Feature />
            </div>
        </section>
    )
}

export default Header
