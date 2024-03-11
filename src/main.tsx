import React, { useState, useEffect, useRef } from 'react';
import styles from "./css/main.module.css";

//////// background
import m1 from './screenshot/m1.jpg'

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
import velog from './icon/velog.png'
import tailwind from './icon/tailwind.png'

import name from './icon/user.png'
import birth from './icon/birthday.png'
import call from './icon/phone-call.png'
import mail from './icon/email.png'
//////////////
import pj1 from './screenshot/a1.png'
import pj2 from './screenshot/b3.png'
import pj3 from './screenshot/c1.png'
import pj4 from './screenshot/d1.png'
/////////////

import Modal1 from './modal/modal1';
import Modal2 from './modal/modal2';
import Modal3 from './modal/modal3';
import Modal4 from './modal/modal4';

import Modal1M from './modal/modal1M'
import Modal2M from './modal/modal2M'
import Modal3M from './modal/modal3M'
import Modal4M from './modal/modal4M'
export default function Main() {


    const [visible, setVisible] = useState<boolean>(false);
    const [frontView, setFrontView] = useState<boolean>(false);
    const [backView, setBackView] = useState<boolean>(false);
    const [midView, setMidView] = useState<boolean>(false);
    const [mid2View, setMid2View] = useState<boolean>(false);
    const [infoView, setInfoView] = useState<boolean>(false);

    // 페이지 최초 렌더시 true
    const [pageLoad, setPageLoad] = useState<boolean>(false)
    useEffect(() => {
        setPageLoad(true)
    }, [])

    //모달

    // state이름을 매개변수로 받기 위해 interface를 먼저 설정
    interface ModalState {
        modalName: boolean;
        setModalName: React.Dispatch<React.SetStateAction<boolean>>;
    }
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalOpen2, setModalOpen2] = useState<boolean>(false);
    const [modalOpen3, setModalOpen3] = useState<boolean>(false);
    const [modalOpen4, setModalOpen4] = useState<boolean>(false);
    const toggleModal = ({ modalName, setModalName }: ModalState) => {
        if (!modalName) {
            setModalName(true);
        } else {
            // 모달 닫을 시 애니메이션이 나오지 않는 이유 = 애니메이션이 재생되기도 전에 닫혀버리기 때문
            // 애니메이션 시간만큼 setTimeout을 걸어서 재생될 시간을 주자.
            setTimeout(() => setModalName(false), 300)
        }
        console.log(modalName)
    };

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

    // // 프론트 뷰포트 감지
    // const io2 = new IntersectionObserver((entries) => {
    //     entries.forEach((entry2, i) => {
    //         if (entry2.isIntersecting) {
    //             setFrontView(true)
    //             console.log("프론트 뷰포트 상태" + frontView)
    //         } else {
    //             console.log("프론트 뷰포트 상태" + frontView)
    //         }
    //     });
    // },
    //     {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5
    //     }
    // )

    // useEffect(() => {
    //     io2.observe(document.querySelector("#front") as HTMLElement);
    //     console.log(frontView)
    // }, [frontView]);

    // // 백 뷰포트 감지
    // const io3 = new IntersectionObserver((entries) => {
    //     entries.forEach((entry2, i) => {
    //         if (entry2.isIntersecting) {
    //             setBackView(true)
    //             console.log("백 뷰포트 상태" + backView)
    //         } else {
    //             console.log("백 뷰포트 상태" + backView)
    //         }
    //     });
    // },
    //     {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5
    //     }
    // )

    // useEffect(() => {
    //     io3.observe(document.querySelector("#back") as HTMLElement);
    //     console.log(backView)
    // }, [backView]);

    // mid 뷰포트 감지
    const io4 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setMidView(true)
                console.log(`mid가 뷰포트에 ${midView}`)
            } else {
                setMidView(false)
                console.log(`mid가 뷰포트에 ${midView}`)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        }
    )

    useEffect(() => {
        io4.observe(document.querySelector("#mid") as HTMLElement);
        console.log(midView)
    }, [midView]);

    // mid2 뷰포트 감지
    const io5 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting && !infoView) {
                setMid2View(true)
                console.log(`mid2가 뷰포트에 ${mid2View}`)
            } else {
                setMid2View(false)
                console.log(`mid2가 뷰포트에 ${mid2View}`)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        }
    )

    useEffect(() => {
        io5.observe(document.querySelector("#mid2") as HTMLElement);
        console.log(mid2View)
    }, [mid2View]);

    // Info 뷰포트 감지
    const io6 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setInfoView(true)
                console.log(`Info가 뷰포트에 ${infoView}`)
            } else {
                setInfoView(false)
                console.log(`Info가 뷰포트에 ${infoView}`)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.8
        }
    )

    useEffect(() => {
        io6.observe(document.querySelector("#Info") as HTMLElement);
        console.log(infoView)
    }, [infoView]);
    //https://ww8007-learn.tistory.com/6 참고했음

    //새로고침하고 스크롤을 맨 위로 올림
    const reload = () => {
        window.location.reload();
        window.scrollTo(0, 0);
    }

    //icon들의 인터페이스(타입설정)
    interface Icon {
        name: string;
        text: string;
    }

    const frontIconArray: Icon[] = [
        {
            name: tailwind,
            text: "Tailwind CSS"
        },
        {
            name: Jq,
            text: "JQuery"
        },
        {
            name: Ts,
            text: "Typescript"
        },
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
    ]
    const backIconArray: Icon[] = [
        {
            name: AWS,
            text: 'AWS'
        },
        {
            name: Spring,
            text: 'Spring Boot'
        },
        {
            name: Java,
            text: 'Java'
        },
        {
            name: MySQL,
            text: 'MySQL'
        },
        {
            name: Node,
            text: 'Node.js'
        },
    ]

    //Ref로 div 위치 구해서 해당 위치로 스크롤
    const divRef = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLDivElement>(null);
    const divRef3 = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<number>(0);
    const [position2, setPosition2] = useState<number>(0);
    const [position3, setPosition3] = useState<number>(0);

    useEffect(() => {
        const updatePosition = () => {
            if (divRef.current) {
                const rect = divRef.current.offsetTop
                setPosition(rect - 50)
            }
        };
        const updatePosition2 = () => {
            if (divRef2.current) {
                const rect2 = divRef2.current.offsetTop
                setPosition2(rect2 - 50)
            }
        }
        const updatePosition3 = () => {
            if (divRef3.current) {
                const rect3 = divRef3.current.offsetTop
                setPosition3(rect3)
            }
        }
        updatePosition();
        updatePosition2();
        updatePosition3();

        const handleResize = () => {
            updatePosition();
            updatePosition2();
            updatePosition3();
        };

        // 'resize'는 창의 크기가 변경될 때마다 다시 이벤트리스너를 추가함
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // 해당 위치로 스크롤, behavior : 'smooth'를 붙여줘야 부드럽게 이동
    const move = (position: number) => {
        window.scrollTo({ top: position, behavior: 'smooth' })
        console.log(position)
    }

    ///////현재 창의 width구해서 모바일 모달을 띄울건지, 그냥 모달을 띄울건지 결정

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    ////////////////
    return (
        <div className={styles.body} id='body'>
            <div className={styles.overlay}>
                <div className={styles.top}>
                    <img className={styles.mainBG} src={m1} />
                    <div className={styles.topOverlay}></div>
                    <h2 className={styles.topTitle}>포트폴리오</h2>
                    <div className={styles.topText}>글씨가 들어갈 거에요</div>

                    <div className={styles.aboutMeCon}>
                        <div className={styles.aboutTitle}>About Me</div>
                        <div className={styles.aboutTextBox}>

                            <img src={name} className={styles.name} />
                            <div className={styles.aboutTextName}>김민영</div>
                            <img src={birth} className={styles.birth} />
                            <div className={styles.aboutTextBirth}>1997.09.05</div>
                            <img src={mail} className={styles.mail} />
                            <div className={styles.aboutTextMail}>alsdudsk12@naver.com</div>
                            <img src={call} className={styles.call} />
                            <div className={styles.aboutTextCall}>010-3617-1488</div>
                            <hr className={styles.aboutHr} />
                            <div className={styles.aboutLink}>
                                <a href='https://velog.io/@votystiq/posts'>  <img className={styles.velog} src={velog}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={visible || modalOpen || modalOpen2 || modalOpen3 || modalOpen4 ? styles.header : styles.header2} id='header'>
                    {/* <div className={visible ? styles.header : styles.header2} id='header'> */}
                    <div className={styles.headerText}>
                        <div className={styles.textWrapper}>
                            <div className={!visible && !mid2View ? styles.colorChange : styles.skill2} onClick={() => move(position)}>Skill</div>
                            <div className={!visible && mid2View && !infoView ? styles.colorChange : styles.project} onClick={() => move(position2)}>Project</div>
                            <div className={!visible && infoView ? styles.colorChange : styles.headerInfo} onClick={() => move(position3)}>Infomation</div>
                        </div>
                        <div className={styles.Logo} onClick={reload}>KIM MIN YOUNG</div>
                    </div>
                </div>

                <div className={styles.mid} id='mid'>
                    <div className={styles.aboutMeCon2}>
                        <div className={styles.aboutTitle2}>About Me</div>
                        <div className={styles.aboutTextBox2}>

                            <img src={name} className={styles.name} />
                            <div className={styles.aboutTextName}>김민영</div>
                            <img src={birth} className={styles.birth} />
                            <div className={styles.aboutTextBirth}>1997.09.05</div>
                            <img src={mail} className={styles.mail} />
                            <div className={styles.aboutTextMail}>alsdudsk12@naver.com</div>
                            <img src={call} className={styles.call} />
                            <div className={styles.aboutTextCall}>010-3617-1488</div>
                            <hr className={styles.aboutHr} />
                            <div className={styles.aboutLink}>
                                <a href='https://velog.io/@votystiq/posts'>  <img className={styles.velog} src={velog}></img></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.skillTitle} ref={divRef} >Skill</div>
                    </div>

                    {/* 데스크탑(넓은 화면 용) */}
                    <div className={styles.skillCon}>
                        <div className={styles.stackWrapper}>
                            <div className={styles.stackText}>FrontEnd</div>
                        </div>
                        <div className={styles.frontIconWrapper}>
                            <div className={styles.frontIconC}>
                                {frontIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index === 0 && (
                                                <div key={index} className={styles.Wrapper} >
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })} </div>
                            <div className={styles.frontIconB}>
                                {frontIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index <= 2 && index > 0 && (
                                                <div key={index} className={styles.Wrapper} >
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>

                            <div className={styles.frontIconA}>
                                {frontIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index <= 6 && index > 2 && (
                                                <div key={index} className={styles.Wrapper} >
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <br />
                        <div className={styles.graphWrapper}>
                            <div className={styles.graphTop}></div>
                            <div className={styles.graphTop}></div>
                            <div className={styles.graphTop}></div>
                            <div className={styles.graphBot}>
                                <div className={styles.graphText}>알고있음</div>
                            </div>
                            <div className={styles.graphBot}>
                                <div className={styles.graphText}>시도해봄</div>
                            </div>
                            <div className={styles.graphBot}>
                                <div className={styles.graphText}>주로 사용</div>
                            </div>
                        </div>

                        <br />

                        <div className={styles.backIconWrapper}>
                            <div className={styles.backIconC}>
                                {backIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index <= 2 && (
                                                <div key={index} className={styles.Wrapper}>
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>

                            <div className={styles.backIconB}>
                                {backIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index === 3 && 1 < index && (
                                                <div key={index} className={styles.Wrapper}>
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>

                            <div className={styles.backIconA}>
                                {backIconArray.map((i, index) => {
                                    return (
                                        <>
                                            {index <= 4 && 3 < index && (
                                                <div key={index} className={styles.Wrapper}>
                                                    <img src={i.name} className={styles.frontIcon} />
                                                    <div className={styles.hoverText}>{i.text}</div>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.stackWrapper}>
                            <div className={styles.stackText}>BackEnd</div>
                        </div>
                    </div>


                    {/* 모바일 용(width : 320px) */}
                    <div className={styles.skillCon2}>
                        <div className={styles.stackWrapper2}>
                            <div className={styles.stackText2}>FrontEnd</div>
                            <div className={styles.stackText2}>BackEnd</div>
                        </div>
                        <div className={styles.skillBox2}>
                            <div className={styles.skillFront2}>
                                <div className={styles.frontIconWrapper2}>
                                    <div className={styles.frontIconC2}>
                                        {frontIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index === 0 && (
                                                        <div key={index} className={styles.Wrapper2} >
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })} </div>
                                    <div className={styles.frontIconB2}>
                                        {frontIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index <= 2 && index > 0 && (
                                                        <div key={index} className={styles.Wrapper2} >
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </div>

                                    <div className={styles.frontIconA2}>
                                        {frontIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index <= 6 && index > 2 && (
                                                        <div key={index} className={styles.Wrapper2} >
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.graphBox2}>
                                <div>
                                    <div className={styles.graphLeft2}></div>
                                    <div className={styles.graphLeft2}></div>
                                    <div className={styles.graphLeft2}></div>
                                </div>
                                <div>
                                    <div className={styles.graphRight2}></div>
                                    <div className={styles.graphRight2}></div>
                                    <div className={styles.graphRight2}></div>
                                </div>
                                <div className={styles.graphTextBox2}>
                                    <div className={styles.graphTextC2}>알고있음</div>
                                </div>
                                <div className={styles.graphTextBox2}>
                                    <div className={styles.graphTextB2}>시도해봄</div>
                                </div>
                                <div className={styles.graphTextBox2}>
                                    <div className={styles.graphTextA2}>주로 사용</div>
                                </div>
                            </div>

                            <div className={styles.skillBack2}>
                                <div className={styles.backIconWrapper2}>
                                    <div className={styles.backIconC2}>
                                        {backIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index <= 2 && (
                                                        <div key={index} className={styles.Wrapper2}>
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </div>

                                    <div className={styles.backIconB2}>
                                        {backIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index === 3 && 1 < index && (
                                                        <div key={index} className={styles.Wrapper2}>
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </div>

                                    <div className={styles.backIconA2}>
                                        {backIconArray.map((i, index) => {
                                            return (
                                                <>
                                                    {index <= 4 && 3 < index && (
                                                        <div key={index} className={styles.Wrapper2}>
                                                            <img src={i.name} className={styles.frontIcon2} />
                                                            <div className={styles.hoverText2}>{i.text}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className={styles.skill} id='front'>

                        <div className={styles.frontBox} >

                            <div className={styles.iconBox} >
                                {frontIconArray.map((i, index) => {
                                    return (

                                        <div className={styles.Wrapper} >

                                            <img key={index} src={i.name} className={styles.frontIcon} />
                                            <div className={styles.hoverText}>{i.text}</div>

                                        </div>

                                    )
                                })}
                            </div>
                            <div className={styles.frontEnd}>Front-End</div>
                            <div>어쩌고저쩌고</div>
                        </div>

                        <div className={styles.backBox}>
                            {frontIconArray.map((i, index) => {
                                const barFillClass = styles[`barFill${index + 1}`]; //index에 따른 barFill변화
                                return (
                                    <div className={styles.barBox}>
                                        <div className={styles.stack}>{i.text}</div>
                                        <div className={frontView ? barFillClass : styles.barEmpty}></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>---------------------------</div>
                    <div className={styles.skillBack} id='back'>

                        <div className={styles.frontBox}>

                            <div className={styles.iconBox2}>
                                {backIconArray.map((i, index) => {
                                    return (
                                        <div className={styles.Wrapper}>
                                            <img key={index} src={i.name} className={styles.frontIcon} />
                                            <div className={styles.hoverText}>{i.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.backEnd}>Back-End</div>
                            <div>어쩌고저쩌고</div>
                        </div>

                        <div className={styles.backBox2}>
                            {backIconArray.map((i, index) => {
                                const barFillClasses = [
                                    styles.barFill4,
                                    styles.barFill5,
                                    styles.barFill6,
                                    styles.barFill6,
                                    styles.barFill6
                                ];
                                const barFillClass = barFillClasses[index]
                                return (
                                    <div className={styles.barBox}>
                                        <div className={styles.stack}>{i.text}</div>
                                        <div className={backView ? barFillClass : styles.barEmpty}></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}


                <div className={styles.mid2} id='mid2'>
                    <div className={styles.titleWrapper}>
                        <div className={styles.projectTitle} ref={divRef2} >Project</div>
                    </div>
                    <div className={styles.mid2Box}>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen4, setModalName: setModalOpen4 })}>
                            {modalOpen4 && (windowWidth > 1100 ? <Modal4 /> : <Modal4M />)}
                            <div className={styles.pjWrapper1}>
                                <img className={styles.pjMainImg1} src={pj4}></img>
                                <div className={styles.pjMainText1}>Demure - 가구 쇼핑몰
                                    <div className={styles.pjSubText1}> 구입부터 결제까지 모든 기능을 구현한 가구 판매 쇼핑몰 </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen3, setModalName: setModalOpen3 })}>
                            {modalOpen3 && (windowWidth > 1100 ? <Modal3 /> : <Modal3M />)}
                            <div className={styles.pjWrapper1}>
                                <img className={styles.pjMainImg1} src={pj3}></img>
                                <div className={styles.pjMainText1}>How Long..? - 모의 구매 및 계산 시뮬레이터
                                    <div className={styles.pjSubText1}> 구매에 필요한 금액과 기간을 계산하는 시뮬레이터 사이트 </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen2, setModalName: setModalOpen2 })}>
                            {modalOpen2 && (windowWidth > 1100 ? <Modal2 /> : <Modal2M />)}
                            <div className={styles.pjWrapper1}>
                                <img className={styles.pjMainImg1} src={pj2}></img>
                                <div className={styles.pjMainText1}>Chatta - 관심사 기반 채팅방 서비스
                                    <div className={styles.pjSubText1}>유저들이 직접 채팅방을 만들어 소통 할 수 있는 커뮤니티</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen, setModalName: setModalOpen })}>
                            {modalOpen && (windowWidth > 1100 ? <Modal1 /> : <Modal1M />)}
                            <div className={styles.pjWrapper1}>
                                <img className={styles.pjMainImg1} src={pj1}></img>
                                <div className={styles.pjMainText1}>Mood Diary - 일기 기록 및 공유 사이트
                                    <div className={styles.pjSubText1}> 누구나 쉽게 짧은 기록을 남기고 서로 공유하는 페이지</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.pj2} onClick={() => toggleModal({ modalName: modalOpen2, setModalName: setModalOpen2 })}>
                        {modalOpen2 && <Modal2 />}
                    </div>
                    <div className={styles.pj3}>box3</div>
                    <div className={styles.pj4}>box4</div> */}
                    </div>
                    <div className={styles.bot} id='Info'>
                        {/* <div className={styles.infoTitle}>
                            <div ref={divRef3}>INFOMATION</div>
                        </div>
                        <div className={styles.infoText}>
                            <div className={styles.infoLeft}>
                                <div className={styles.infoLeftInner}>
                                    <div className={styles.infoWrapper}>
                                        <div>개발 기간 - ??~ ??</div>

                                        <div>기술 - React + Typescript</div>

                                        <div>배포 - ??</div>

                                        <div>아이콘 - Flaticon</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoRight}>
                                <div>E-MAIL</div>
                                <div>alsdudsk12@naver.com</div>
                                <div>
                                    <a href='https://velog.io/@votystiq/posts'>  <img className={styles.velog} src={velog}></img></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}