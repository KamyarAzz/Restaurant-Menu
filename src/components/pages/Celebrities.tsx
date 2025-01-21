import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {People, TPerson} from "../../lib/types";
import Person from "../ui/Person";
import styles from "../../css/celebrities.module.css";

export default function Celebrities() {
  const [people, setPeople] = useState<TPerson[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const loadJSON = async (url: string) => {
    const response = await fetch(url);
    const data: People = await response.json();
    setPeople(data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadJSON(`https://reqres.in/api/users?page=${page}`);
  }, [page]);

  return (
    <div>
      <div className={styles.background}>
        <div className={`${loading ? "" : styles.hidden} ${styles.red}`}></div>
      </div>
      <div className={`${loading ? styles.hidden : ""} ${styles.main}`}>
        <div className={styles.slider}>
          <div className={styles.link} onClick={() => navigate(-1)}>
            {"< Return"}
          </div>
        </div>
        <div className={styles.output}>
          {people.map((person) => (
            <Person personData={person} />
          ))}
        </div>
        <br />
        <div className={styles.bottom}>
          <button
            className={`${styles.navigationButton} ${
              page === 1 ? styles.inactive : ""
            }`}
            onClick={() => setPage(1)}
          >
            Previous
          </button>
          <div className={styles.page}>{page}</div>
          <button
            className={`${styles.navigationButton} ${
              page === 2 ? styles.inactive : ""
            }`}
            onClick={() => setPage(2)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
