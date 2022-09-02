import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Just Pizza!</h1>
            </div>
            <div className={styles.item}>
                <ul className={styles.lists}>
                    <li className={styles.list}>Home</li>
                    <li className={styles.list}>Menu</li>
                    <li className={styles.list}>About Us</li>
                    <li className={styles.list}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.telIcon}>
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now</div>
                    <div className={styles.text}>+91 385 235 5183</div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.iconItem}>
                            <div className={styles.cart}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={styles.cartQuantity}>2</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;