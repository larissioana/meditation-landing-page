import styles from './headerDescription.module.css';

const HeaderDescription = () => {
    return (
        <div className={styles.headerDescription}>
            <h3 className={styles.firstText}>Breathe. <span className={styles.secondText}>Relax.</span> <span className={styles.thirdText}>Meditate</span></h3>
            <h3>Transform Your Mind and Body with QuietMind |</h3>
            <h3>Achieve Mental Clarity and Emotional Balance.</h3>
        </div>
    )
}

export default HeaderDescription
