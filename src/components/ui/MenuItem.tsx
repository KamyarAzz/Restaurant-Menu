import {TMenuItem} from "../../lib/types";
import styles from "../../css/menuItem.module.css";

type Props = {
  item: TMenuItem;
};

export default function MenuItem({item}: Props) {
  return (
    <article>
      <img className={styles.foodImage} src={item.img} alt={item.title} />
      <div className={styles.info}>
        <header className={styles.header}>
          <h4 className={styles.heading4}>{item.title}</h4>
          <h4 className={`${styles.heading4} ${styles.price}`}>
            ${item.price}
          </h4>
        </header>
        <p className={styles.text}>{item.desc}</p>
      </div>
    </article>
  );
}
