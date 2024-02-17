import React, { useState } from 'react';
import styles from "./css/main.module.css";
import Modal1 from './modal/modal1';
import Modal2 from './modal/modal2';



export default function Main() {


    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);

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
                <div className={styles.skill2}>skill</div>
                <div className={styles.project}>project</div>
                <div className={styles.footer}>footer</div>
            </div>
            <div className={styles.mid}>
                <div className={styles.skill}>

                    <div className={styles.frontBox}> front-end
                        <div className={styles.barBox}>
                            <div className={styles.stack}>HTML</div>
                        </div>
                    </div>
                    <div className={styles.backBox}> back-end</div>

                </div>


                <div className={styles.project}>project</div>

                <div className={styles.pj1} onClick={show}>
                    {showModal && <Modal1 showModal={showModal} setShowModal={setShowModal} />}
                    box1
                </div>

                {back &&
                    <div className={styles.modalBack} onClick={close}>
                    </div>}

                <div className={styles.pj2} onClick={show}>
                    {showModal && <Modal2 showModal={showModal2} setShowModal={setShowModal2} />}
                    box2
                </div>
                {back &&
                    <div className={styles.modalBack} onClick={close}>
                    </div>}
                <div className={styles.pj3}>box3</div>
                <div className={styles.pj4}>box4</div>

            </div>
            <div className={styles.bot}>b</div>
        </div>
    );
}