import styles from './Card.module.css'

function Card (props) {

    const cardClass = props.isBigger ? `${styles.wrapper} ${styles.bigger}` : styles.wrapper;

    return (
        <div className={cardClass}>
            <div className={styles.header} style={{backgroundColor: props.headerColor}}>
            <p>Безлимитный {props.title}</p>
            </div>
            <div className={styles.main} style={{ backgroundColor: props.mainColor }}>
            <span className={styles.rub}>руб</span><p>{props.price}
            <span>/мес</span>
            </p>
            </div>
            <div className={styles.speed}>
            <p>до {props.speed} Мбит/сек</p>
            </div>
            <div className={styles.footer}>
            <p>Объем включенного <br></br> трафика не ограничен</p>
            </div>
        </div>

    )
}

export default Card;