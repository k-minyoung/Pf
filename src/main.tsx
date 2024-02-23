import React, { useState, useEffect, useRef } from 'react';
import styles from "./css/main.module.css";
import Modal1 from './modal/modal1';
import Modal2 from './modal/modal2';

//////// ICON
import frontIcon from './icon/9094993.png'
import backIcon from './icon/cloud-server.png'
import HTML from './icon/html-5.png'
import CSS from './icon/css-3.png'
import Js from './icon/js.png'
import react from './icon/react.png'
import Ts from './icon/typescript.png'
import Jq from './icon/jquery.png'
import Node from './icon/nodejs.png'
import Java from './icon/java.png'
import MySQL from './icon/mysql.png'
import Spring from './icon/spring.png'
import AWS from './icon/AWS.png'
import { hover } from '@testing-library/user-event/dist/hover';
//////////////


export default function Main() {


    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [frontView, setFrontView] = useState<boolean>(false);
    const [backView, setBackView] = useState<boolean>(false);


    const [back, setBack] = useState<boolean>(false);

    //화면에 나타남을 감지(헤더)
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    console.log(`헤더가 뷰포트에 들어옴`);
                    setVisible(true)

                } else {
                    console.log(`헤더가 뷰포트에서 나감`);
                    setVisible(false)

                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 1
            //비율 (1이면 전체가 나타나야 인정)
        }
    );

    useEffect(() => {
        io.observe(document.querySelector("#header") as HTMLElement);//여기서 타겟 설정
    }, []);

    // 프론트 뷰포트 감지
    const io2 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setFrontView(true)
                console.log(frontView)
            } else {
                // setbackView(false)
                // console.log(backView)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        }
    )

    useEffect(() => {
        io2.observe(document.querySelector("#front") as HTMLElement);
        console.log(frontView)
    }, [frontView]);

    // 백 뷰포트 감지
    const io3 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setBackView(true)
                console.log(backView)
            } else {
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        }
    )

    useEffect(() => {
        io3.observe(document.querySelector("#back") as HTMLElement);
        console.log(backView)
    }, [backView]);
    //https://ww8007-learn.tistory.com/6 참고했음



    // // 스크롤 이벤트 리스너 등록
    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);
    //     return () => {
    //         window.removeEventListener("scroll", onScroll);
    //     };
    // }, []);

    //위치 콘솔 찍어주기
    // useEffect(() => {
    //     console.log(scrollPosition)
    // }, [scrollPosition])

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
    interface Icon {
        name: string;
        text: string;
    }

    const frontIconArray: Icon[] = [
        {
            name: HTML,
            text: "HTML"
        },
        {
            name: CSS,
            text: "CSS"
        },
        {
            name: Js,
            text: "Javascript"
        },
        {
            name: react,
            text: "React"
        },
        {
            name: Ts,
            text: "Typescript"
        },
        {
            name: Jq,
            text: "JQuery"
        }
    ]

    return (
        <div className={styles.body} id='body'>
            <div className={styles.top}>포트폴리오입니다</div>

            <div className={visible ? styles.header : styles.header2} id='header'>
                <div className={styles.skill2}>skill</div>
                <div className={styles.project}>project</div>
                <div className={styles.footer}>footer</div>
            </div>
            <div className={styles.mid}>
                <div className={styles.skillTitle}>Skill</div>
                <div className={styles.skill} id='front'>

                    <div className={styles.frontBox}>
                        <div>분야</div>
                        <div className={styles.iconBox}>
                            {frontIconArray.map((i, index) => {
                                return (

                                    <div className={styles.Wrapper}>

                                        <img key={index} src={i.name} className={styles.frontIcon} />
                                        <div className={styles.hoverText}>{i.text}</div>

                                    </div>

                                )
                            })}
                        </div>
                        <div>Front-End</div>
                        <div>어쩌고저쩌고</div>
                    </div>

                    <div className={styles.backBox}> 숙련도

                        <div className={styles.barBox}>
                            <div className={styles.stack}>HTML</div>
                            <div className={frontView ? styles.barFill1 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>CSS</div>
                            <div className={frontView ? styles.barFill2 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Javascript</div>
                            <div className={frontView ? styles.barFill3 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>React</div>
                            <div className={frontView ? styles.barFill4 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Typescript</div>
                            <div className={frontView ? styles.barFill5 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Jquery</div>
                            <div className={frontView ? styles.barFill6 : styles.barEmpty}></div>
                        </div>
                    </div>


                </div>
                <div className={styles.skill} id='back'>

                    <div className={styles.frontBox}> 분야
                        <div>
                            <img src={Node} className={styles.frontIcon} />
                            <img src={Java} className={styles.frontIcon} />
                            <img src={MySQL} className={styles.frontIcon} />
                            <img src={Spring} className={styles.frontIcon} style={{ width: '110px' }} />
                            <img src={AWS} className={styles.frontIcon} style={{ width: '110px' }} />

                        </div>
                        <div>Back-end</div>
                        <div>어쩌고저쩌고</div>
                    </div>

                    <div className={styles.backBox}> 숙련도

                        <div className={styles.barBox}>
                            <div className={styles.stack}>Node.js</div>
                            <div className={backView ? styles.barFill4 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Java</div>
                            <div className={backView ? styles.barFill5 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>MySQL</div>
                            <div className={backView ? styles.barFill6 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>Spring-boot</div>
                            <div className={backView ? styles.barFill6 : styles.barEmpty}></div>
                        </div>
                        <div className={styles.barBox}>
                            <div className={styles.stack}>AWS</div>
                            <div className={backView ? styles.barFill6 : styles.barEmpty}></div>
                        </div>
                    </div>


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