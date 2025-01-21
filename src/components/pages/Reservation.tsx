import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FormData, Errors} from "../../lib/types";
import styles from "../../css/reservation.module.css";

export default function Reservation() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    number: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Errors>({
    nameError: "",
    numberError: "",
    dateError: "",
    timeError: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous errors
    setErrors({
      nameError: "",
      numberError: "",
      dateError: "",
      timeError: "",
    });

    let n = 0;

    // Validation checks
    const newErrors: Errors = {
      nameError: "",
      numberError: "",
      dateError: "",
      timeError: "",
    };

    if (formData.fullname === "") {
      newErrors.nameError = "Please enter your name!";
      n++;
    }
    if (formData.number === "") {
      newErrors.numberError = "Please enter your number!";
      n++;
    }
    if (formData.date === "") {
      newErrors.dateError = "Please choose a date!";
      n++;
    }
    if (formData.time === "") {
      newErrors.timeError = "Please choose a time!";
      n++;
    }

    // Update errors state if there are any
    setErrors(newErrors);

    // If no errors, show success message
    if (n === 0) {
      alert("Reservation Complete!");
      navigate("/menu");
      // location.replace("../index.html"); // Uncomment if you want to redirect instead
    }
  };

  return (
    <div className={styles.page}>
      <section>
        <div
          onClick={() => navigate(-1)}
          className={`${styles.slider} ${styles.leftSlider}`}
        >
          <p>{"< Return"}</p>
        </div>
        <h1>Table Reservation</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputContainer}>
            <input
              className={styles.formInput}
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.nameError}</div>
            <input
              type="tel"
              className={styles.formInput}
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.numberError}</div>
            <input
              type="date"
              className={styles.formInput}
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.dateError}</div>
            <input
              type="time"
              className={styles.formInput}
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.timeError}</div>
            <br />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
          <p>
            For further information please{" "}
            <Link className={styles.link} to="/about">
              Contact
            </Link>{" "}
            us.
          </p>
        </form>
      </section>
    </div>
  );
}
