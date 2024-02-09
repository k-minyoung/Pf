import React from 'react';
import styles from "./main.module.css"
export default function Main() {
    return (
        <div className={styles.body}>
            <div className={styles.top}>t</div>
            <div className={styles.mid}>
                <div className={styles.pj1}>box1</div>
                <div className={styles.pj2}>box2</div>
                <div className={styles.pj3}>box3</div>
                <div className={styles.pj4}>box4</div>

            </div>
            <div className={styles.bot}>b</div>
        </div>
    );
}