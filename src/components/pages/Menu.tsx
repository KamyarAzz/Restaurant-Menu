import {useState} from "react";
import {Link} from "react-router-dom";
import MenuItem from "../ui/MenuItem";
import {TSortKey} from "../../lib/types";
import menuItems from "../../assets/features/foodItems";
import styles from "../../css/menu.module.css";

export default function Menu() {
  const [sortedItems, setSortedItem] = useState(menuItems);

  let sortMenu = (sortKey: TSortKey) => {
    if (sortKey !== "all") {
      const newMenu = menuItems.filter((item) => item.category === sortKey);
      setSortedItem(newMenu);
    } else {
      setSortedItem(menuItems);
    }
  };

  return (
    <div className={styles.menuPage}>
      <div className={styles.title}>
        <h1 className={styles.heading1}>
          Our<span> </span>Menu
        </h1>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.btnContainer}>
        <div className={`${styles.leftSlider} ${styles.slider}`}>
          <Link to="/about">About Us</Link>
        </div>
        <button onClick={() => sortMenu("all")} className={styles.btn}>
          All
        </button>
        <button onClick={() => sortMenu("breakfast")} className={styles.btn}>
          Breakfast
        </button>
        <button onClick={() => sortMenu("lunch")} className={styles.btn}>
          Lunch
        </button>
        <button onClick={() => sortMenu("dinner")} className={styles.btn}>
          Dinner
        </button>
        <button onClick={() => sortMenu("shakes")} className={styles.btn}>
          Dessert
        </button>
        <div className={`${styles.rightSlider} ${styles.slider}`}>
          <Link to="/reservation">Reservations</Link>
        </div>
      </div>
      <div className={styles.menuContainer}>
        {sortedItems.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </div>
  );
}
