import styles from "../styles/PizzaCategory.module.css";
import Image from "next/image";

const PizzaCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
          <Image src="/images/mania.png" alt="mania pizza" width="200" height="200" />
          <div className={styles.pizzaName}>Pizza Mania</div>
        </div>
        <div className={styles.item}>
          <Image src="/images/veg-pizza.png" alt="mania pizza" width="175" height="175" />
          <div className={styles.pizzaName}>Veg Pizza</div>
        </div>
        <div className={styles.item}>
          <Image src="/images/non-veg-pizza.png" alt="mania pizza" width="170" height="170" />
          <div className={styles.pizzaName}>Non-Veg Pizza</div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCategory;
