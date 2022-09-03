import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.items}>
          <div className={styles.item}>
            <h1 className={styles.title}>Craving for pizza? You are in the right place</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.item}>
            <button className={styles.button}>Order Now</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.image}>
          <Image src="/images/featured-page-pizza.png" alt="" width="632px" height="533px" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
