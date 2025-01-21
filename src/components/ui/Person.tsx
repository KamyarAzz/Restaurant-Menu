import {TPerson} from "../../lib/types";
import styles from "../../css/person.module.css";

type Props = {personData: TPerson};

export default function Person({personData}: Props) {
  return (
    <div className={styles.person} key={personData.id}>
      <img className={styles.img} src={personData.avatar} alt="avatar" />
      <p className={styles.p}>
        {personData.first_name} {personData.last_name}
      </p>
    </div>
  );
}
