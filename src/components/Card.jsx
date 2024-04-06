import styles from './Card.module.scss';

function Card (props) {
    const {checked, onClick, headerColor, mainColor, price, speed } = props;

    const wrapperStyles = checked ? styles.bigger : styles.wrapper;

    return (
        <div className={wrapperStyles} onClick={onClick}>
            <div className={`${styles.header} ${styles[headerColor]}`}>
                <p>Безлимитный {price}</p>
            </div>
            <div className={`${styles.main} ${styles[mainColor]}`}>
            <span className={styles.rub}>руб</span><p>{price}
            <span>/мес</span>
            </p>
            </div>
            <div className={styles.speed}>
            <p>до {speed} Мбит/сек</p>
            </div>
            <div className={styles.footer}>
            <p>Объем включенного <br />трафика не ограничен</p>
            </div>
        </div>
    )
}

export default Card;