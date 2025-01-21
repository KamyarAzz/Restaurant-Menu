import styles from "../../css/about.module.css";
import Footer from "../ui/Footer";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.heading1}>About Our Restaurant</h1>
      <br />
      <br />
      <div className={styles.container}>
        <p>
          Welcome to our restaurant, Where Delicious Food Meets Great Company
          <br />
          At our restaurant, we pride ourselves on providing our guests with a
          memorable dining experience. Our cozy and welcoming atmosphere,
          coupled with our delectable dishes, makes us a go-to destination for
          food lovers.
          <br />
          <br />
          Our team of talented chefs uses only the freshest, locally-sourced
          ingredients to create mouth-watering dishes that are sure to delight
          your taste buds. From our signature seafood pasta to our savory
          steaks, we have something for everyone.
          <br />
          <br />
          But it's not just our food that sets us apart. Our friendly and
          attentive staff is always at your service, ensuring that your visit is
          relaxing and enjoyable.
          <br />
          <br />
          We also offer an extensive wine list, featuring a range of local and
          international vintages that perfectly complement our food menu. And if
          you're celebr/ating a special occasion, our private dining room offers
          an intimate and exclusive experience for you and your guests.
          <br />
          <br />
          Here, we take pride in being more than just a place to eat. We're a
          community where good food and great company intersect, creating
          memories that last a lifetime.
          <br />
          <br />
          <span className={styles.historyText}>History</span>
          <br />
          <br />
          A Legacy of Fine Dining
          <br />
          <br />
          Nestled in the heart of Tehran, Our retaurant has been serving up
          delicious meals to locals and visitors alike for over 5 years. Founded
          by Kamyar Azizi in 1397, the restaurant has become a beloved
          institution in the community, known for its impeccable service and
          mouth-watering cuisine.
          <br />
          <br />
          Kamyar had always dreamed of opening a restaurant that would combine
          his passion for cooking with his love of entertaining. He spent years
          honing his skills as a chef, working in some of the finest kitchens in
          the world before settling down in Tehran to start his own venture.
          <br />
          <br />
          From the beginning, Our restaurant was a hit with food critics and
          local residents alike. With its cozy decor and intimate atmosphere,
          the restaurant quickly became a favorite destination for romantic
          dinners and special occasions.
          <br />
          <br />
          Over the years, we have undergone several transformations and
          expansions, but it has always remained true to its roots. Today, the
          menu features a blend of classNameic dishes and innovative creations,
          all made with the finest ingredients. From our famous lobster bisque
          to our juicy steaks, each dish is crafted with care and precision,
          ensuring that every guest leaves satisfied.
          <br />
          <br />
          Despite its success, Our restaurant remains a family-owned and
          operated business, with Kamyar's friends and family carrying on his
          legacy. Today, the restaurant continues to be a hub of community
          activity, hosting special events, charity fundraisers, and more.
          <br />
          <br />
          For generations, Our restaurant has been a symbol of the very best in
          fine dining. We look forward to serving our loyal customers for many
          years to come.
          <br />
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
}
