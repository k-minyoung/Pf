import React, { useState } from 'react';
import styles from "./main.module.css";
import Modal1 from './modal1';



export default function Main() {


    const [showModal, setShowModal] = useState<boolean>(false);
    const [back, setBack] = useState<boolean>(false);

    //모달 열기
    const show = () => {
        setShowModal(true)
        setBack(true)
        console.log(showModal)
    }
    //모달 닫기
    const close = () => {
        setShowModal(false)
        setBack(false)
        console.log(showModal)
    }


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
                <div className={styles.pj1} onClick={show}>
                    {showModal && <Modal1 showModal={showModal} setShowModal={setShowModal} />}
                    box1
                </div>
                {back &&
                    <div className={styles.modalBack} onClick={close}>
                    </div>}
                <div className={styles.pj2}>box2</div>
                <div className={styles.pj3}>box3</div>
                <div className={styles.pj4}>box4</div>

            </div>
            <div className={styles.bot}>b</div>
        </div>
    );
}