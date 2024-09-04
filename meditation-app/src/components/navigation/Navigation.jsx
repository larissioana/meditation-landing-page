import styles from './navigation.module.css';

const Navigation = ({ toggleTheme, isDarkMode }) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <h1 className={styles.logo}>QuietMind</h1>
            </div>
            <div className={styles.navRight}>
                <button className={styles.toggle} onClick={toggleTheme}>
                    {
                        isDarkMode ?
                            <span class="material-symbols-outlined">
                                light_mode
                            </span>
                            :
                            <span class="material-symbols-outlined">
                                dark_mode
                            </span>
                    }
                </button>
            </div>
        </nav>
    )
};

export default Navigation;
