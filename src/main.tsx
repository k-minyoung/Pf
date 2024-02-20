import React, { useState, useEffect } from 'react';
import styles from "./css/main.module.css";
import Modal1 from './modal/modal1';
import Modal2 from './modal/modal2';



export default function Main() {


    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const [back, setBack] = useState<boolean>(false);

    //스크롤 위치 구함
    const onScroll = () => {
        setScrollPosition(window.scrollY)
    }

    //이벤트 리스너 등록
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    //위치 콘솔 찍어주기
    useEffect(() => {
        console.log(scrollPosition)
    }, [scrollPosition])

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
            <div className={scrollPosition >= 850 ? styles.header2 : styles.header}>
                {/* 스크롤 위치가 850을 넘으면 header2스타일, 아니면 header스타일 적용 */}
                <div className={styles.skill2}>skill</div>
                <div className={styles.project}>project</div>
                <div className={styles.footer}>footer</div>
            </div>
            <div className={styles.mid}>
                <div className={styles.skillTitle}>Skill</div>
                <div className={styles.skill}>

                    <div className={styles.frontBox}> front-end
                        <div className={styles.barBox}>
                            <div className={styles.stack}>HTML</div>
                            <div className={styles.barFill1}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>CSS</div>
                            <div className={styles.barFill2} ></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Javascript</div>
                            <div className={styles.barFill3}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>React</div>
                            <div className={styles.barFill4}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Typescript</div>
                            <div className={styles.barFill5}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Jquery</div>
                            <div className={styles.barFill6}></div>
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