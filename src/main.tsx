import React from 'react';
import styles from "./main.module.css"
export default function Main() {
    return (
        <div className={styles.body}>
            <div className={styles.top}>포트폴리오입니다</div>
            <div className={styles.header}>
                <div>skill</div>
                <div>project</div>
                <div>footer</div>
            </div>
            <div className={styles.mid}>
                <div className={styles.skill}>skill
                </div>

                <div className={styles.project}>project</div>
                <div className={styles.pj1}>box1</div>
                <div className={styles.pj2}>box2</div>
                <div className={styles.pj3}>box3</div>
                <div className={styles.pj4}>box4</div>

            </div>
            <div className={styles.bot}>b</div>
        </div>
    );
}