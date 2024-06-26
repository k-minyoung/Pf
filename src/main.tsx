import React, { useState, useEffect, useRef } from 'react';
import styles from "./css/main.module.css";

//////// background
import m1 from './screenshot/m1.jpg'

//////// ICON
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
import sass from './icon/sass.png'

import name from './icon/user.png'
import birth from './icon/birthday.png'
import call from './icon/phone-call.png'
import mail from './icon/email.png'
import menu from './icon/hamburger.png'
import close from './icon/close.png'
import down from './icon/down.png'
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
    const [midView, setMidView] = useState<boolean>(false);
    const [mid2View, setMid2View] = useState<boolean>(false);
    const [infoView, setInfoView] = useState<boolean>(false);

    // 페이지 최초 렌더시 true
    // const [pageLoad, setPageLoad] = useState<boolean>(false)
    // useEffect(() => {
    //     setPageLoad(true)
    // }, [])

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
            setTimeout(() => {

            }, 1000);

            setTimeout(() => {

            }, 4000);

            setSideMenuToggle(false)
        } else {
            // 모달 닫을 시 애니메이션이 나오지 않는 이유 = 애니메이션이 재생되기도 전에 닫혀버리기 때문
            // 애니메이션 시간만큼 setTimeout을 걸어서 재생될 시간을 주자.
            setTimeout(() => setModalName(false), 300)


        }
        // console.log(modalName)
    };

    //화면에 나타남을 감지(헤더)
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // console.log(`헤더가 뷰포트에 들어옴`);
                    setVisible(true)

                } else {
                    // console.log(`헤더가 뷰포트에서 나감`);
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

    // mid 뷰포트 감지
    const io4 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setMidView(true)
                // console.log(`mid가 뷰포트에 ${midView}`)
            } else {
                setMidView(false)
                // console.log(`mid가 뷰포트에 ${midView}`)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.4
        }
    )

    useEffect(() => {
        io4.observe(document.querySelector("#mid") as HTMLElement);
        // console.log(midView)
    }, [midView]);

    // mid2 뷰포트 감지
    const io5 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting && !infoView) {
                setMid2View(true)
                // console.log(`mid2가 뷰포트에 ${mid2View}`)
            } else {
                setMid2View(false)
                // console.log(`mid2가 뷰포트에 ${mid2View}`)
            }
        });
    },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.4
        }
    )

    useEffect(() => {
        io5.observe(document.querySelector("#mid2") as HTMLElement);
        // console.log(mid2View)
    }, [mid2View]);

    // Info 뷰포트 감지
    const io6 = new IntersectionObserver((entries) => {
        entries.forEach((entry2, i) => {
            if (entry2.isIntersecting) {
                setInfoView(true)
                // console.log(`Info가 뷰포트에 ${infoView}`)
            } else {
                setInfoView(false)
                // console.log(`Info가 뷰포트에 ${infoView}`)
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
        // console.log(infoView)
    }, [infoView]);

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
            name: sass,
            text: "Sass"
        },
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
        // console.log(position)
    }
    // 햄버거용 무브 (누르면 토글)
    const moveM = (position: number) => {
        window.scrollTo({ top: position, behavior: 'smooth' })
        setSideMenuToggle(!sideMenuToggle)
        // console.log(position)
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

    ///햄버거 토글
    const [sideMenuToggle, setSideMenuToggle] = useState<boolean>(false)

    const sideToggle = () => {
        // setTimeout(() => setSideMenuToggle(!sideMenuToggle), 300)
        setSideMenuToggle(!sideMenuToggle)
        // console.log("사이드바 토글 상태" + sideMenuToggle)
    }

    return (
        <div className={styles.body} id='body'>
            <div className={styles.overlay}>
                <div className={styles.top}>

                    <img alt="" className={styles.mainBG} src={m1} />
                    <div className={styles.topOverlay}>
                    </div>
                    <div className={styles.topTitleBox}>
                        <div className={styles.topText}>프론트엔드 개발자를 희망하는</div>
                        <div className={styles.topTitle}>
                            <div className={styles.topTitle1}>김민영</div>
                            <div className={styles.topTitle2}>입니다.</div>
                        </div>
                        <div className={styles.topText2}>짧은 코드를 위해 고민하며</div>
                        <div className={styles.topText3}>기록하기 위해 노력합니다.</div>
                        {/* <div className={styles.topText4}>
                            <div className={styles.more}>더보기<img alt="" className={styles.moreIcon} src={arrow} /></div>
                        </div> */}
                        <div className={styles.topBlink}></div>
                        <div className={styles.downBox}>
                            <img alt="" className={styles.topDown} src={down} />
                        </div>
                    </div>
                    <div className={styles.aboutMeCon}>
                        <div className={styles.aboutTitle}>About Me</div>
                        <div className={styles.aboutTextBox}>

                            <img alt="" src={name} className={styles.name} />
                            <div className={styles.aboutTextName}>김민영</div>
                            <img alt="" src={birth} className={styles.birth} />
                            <div className={styles.aboutTextBirth}>1997.09.05</div>
                            <img alt="" src={mail} className={styles.mail} />
                            <div className={styles.aboutTextMail}>alsdudsk12@naver.com</div>
                            <img alt="" src={call} className={styles.call} />
                            <div className={styles.aboutTextCall}>010-3617-1488</div>
                            <hr className={styles.aboutHr} />
                            <div className={styles.aboutLink}>
                                <a href='https://velog.io/@votystiq/posts'>  <img alt="" className={styles.velog} src={velog}></img></a>
                            </div>
                        </div>
                        <div className={styles.aboutBlink}></div>
                    </div>



                </div>
                <div className={visible || modalOpen || modalOpen2 || modalOpen3 || modalOpen4 ? styles.header : styles.header2} id='header'>
                    {/* <div className={visible ? styles.header : styles.header2} id='header'> */}
                    <div className={styles.headerText}>
                        <div className={styles.textWrapper}>
                            {/* <div className={!visible && !mid2View ? styles.colorChange : styles.skill2} onClick={() => move(0)}>Home</div> */}
                            <div className={visible ? styles.colorChange : styles.headerInfo} onClick={() => move(0)}>Home</div>
                            <div className={!visible && midView && !infoView ? styles.colorChange : styles.skill2} onClick={() => move(position)}>Skill</div>
                            <div className={infoView || !visible && !midView ? styles.colorChange : styles.project} onClick={() => move(position2)}>Project</div>
                        </div>
                        <div className={styles.Logo} onClick={reload}>KIM MIN YOUNG</div>

                        {/* 700이하 햄버거 */}
                        <div className={styles.burger} onClick={sideToggle}><img alt="" className={sideMenuToggle ? styles.close : styles.burgerIcon} src={sideMenuToggle ? close : menu} /></div>
                    </div>
                    {sideMenuToggle &&
                        <div className={styles.sideOverlay}>
                            <div className={styles.sideCon}>
                                <div className={styles.sideBox}>
                                    <div className={styles.sideAboutMe} onClick={() => moveM(position - 630)}>About Me</div>
                                    <hr className={styles.sideHr}></hr>
                                    {/* <div className={styles.sideDiv}></div> */}
                                    <div className={styles.sideSkill} onClick={() => moveM(position)}>Skill</div>
                                    <hr className={styles.sideHr}></hr>
                                    {/* <div className={styles.sideDiv}></div> */}
                                    <div className={styles.sideProject} onClick={() => moveM(position2)}>Project</div>
                                    <hr className={styles.sideHr}></hr>
                                    {/* <div className={styles.sideDiv}></div> */}
                                    <div className={styles.sideInfo} onClick={() => moveM(position3)}>Info</div>

                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className={styles.mid} id='mid'>
                    <div className={styles.aboutMeCon2}>
                        <div className={styles.aboutTitle2}>About Me</div>
                        <div className={styles.aboutTextBox2}>

                            <img alt="" src={name} className={styles.name} />
                            <div className={styles.aboutTextName}>김민영</div>
                            <img alt="" src={birth} className={styles.birth} />
                            <div className={styles.aboutTextBirth}>1997.09.05</div>
                            <img alt="" src={mail} className={styles.mail} />
                            <div className={styles.aboutTextMail}>alsdudsk12@naver.com</div>
                            <img alt="" src={call} className={styles.call} />
                            <div className={styles.aboutTextCall}>010-3617-1488</div>
                            <hr className={styles.aboutHr} />
                            <div className={styles.aboutLink}>
                                <a href='https://velog.io/@votystiq/posts'>  <img alt="" className={styles.velog} src={velog}></img></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.skillTitle} ref={divRef} >Skill</div>
                    </div>

                    {/* 데스크탑(넓은 화면 용) */}
                    <div className={styles.skillMaster}>
                        <div className={styles.stackTitle}>
                            <br />
                            <div className={styles.stackTitleBox}>
                                <div className={styles.stackblink}></div>
                                <div className={styles.stackText}>{"<FrontEnd>"}</div>
                            </div>
                            <div className={styles.stackTitleBox2}>
                                <div className={styles.stackText} style={{ color: "#6f00ff" }}>{"<BackEnd>"} </div>
                                <div className={styles.stackblink}></div>
                            </div>
                        </div>


                        <div className={styles.skillCon}>
                            <br />
                            <div className={styles.stackWrapper}>

                                <div className={styles.graphBot2}>
                                    <div className={styles.graphText}>알고있음</div>
                                </div>
                                <div className={styles.graphBot2}>
                                    <div className={styles.graphText}>사용해봄</div>
                                </div>
                                <div className={styles.graphBot2}>
                                    <div className={styles.graphText}>주로 사용</div>
                                </div>
                            </div>
                            <br />
                            <div className={styles.frontIconWrapper}>
                                <div className={styles.frontIconC}>
                                    {frontIconArray.map((i, index) => {
                                        return (
                                            <>
                                                {index === 0 && (
                                                    <div key={index} className={styles.Wrapper} >
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
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
                                                {index <= 3 && index > 0 && (
                                                    <div key={index} className={styles.Wrapper} >
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
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
                                                {index <= 7 && index > 3 && (
                                                    <div key={index} className={styles.Wrapper} >
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
                                                        <div className={styles.hoverText}>{i.text}</div>
                                                    </div>
                                                )}
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.blink}></div>
                            <div className={styles.graphWrapper}>
                                <div className={styles.graphTop}></div>
                                <div className={styles.graphTop}></div>
                                <div className={styles.graphTop}></div>
                                <div className={styles.graphBot}>
                                    {/* <div className={styles.graphText}>알고있음</div> */}
                                </div>
                                <div className={styles.graphBot}>
                                    {/* <div className={styles.graphText}>시도해봄</div> */}
                                </div>
                                <div className={styles.graphBot}>
                                    {/* <div className={styles.graphText}>주로 사용</div> */}
                                </div>
                            </div>
                            <div className={styles.blink}></div>


                            <div className={styles.backIconWrapper}>
                                <div className={styles.backIconC}>
                                    {backIconArray.map((i, index) => {
                                        return (
                                            <>
                                                {index <= 2 && (
                                                    <div key={index} className={styles.Wrapper}>
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
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
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
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
                                                        <img alt="" src={i.name} className={styles.frontIcon} />
                                                        <div className={styles.hoverText}>{i.text}</div>
                                                    </div>
                                                )}
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />
                            <br />
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
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                                                    {index <= 3 && index > 0 && (
                                                        <div key={index} className={styles.Wrapper2} >
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                                                    {index <= 7 && index > 3 && (
                                                        <div key={index} className={styles.Wrapper2} >
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                                    <div className={styles.graphTextB2}>사용해봄</div>
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
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                                                            <img alt="" src={i.name} className={styles.frontIcon2} />
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
                <div className={styles.mid2} id='mid2'>
                    <div className={styles.line2}></div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.projectTitle} ref={divRef2} >Project</div>
                    </div>
                    <div className={styles.mid2Box}>

                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen4, setModalName: setModalOpen4 })}>
                            {modalOpen4 && (windowWidth > 1100 ? <Modal4 /> : <Modal4M />)}
                            <div className={styles.pjWrapper1}>
                                <img alt="" className={styles.pjMainImg1} src={pj4}></img>
                                <div className={styles.pjMainText1}>Demure - 가구 쇼핑몰
                                    <div className={styles.pjSubText1}> 구입부터 결제까지 모든 기능을 구현한 가구 판매 쇼핑몰 </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen3, setModalName: setModalOpen3 })}>
                            {modalOpen3 && (windowWidth > 1100 ? <Modal3 /> : <Modal3M />)}
                            <div className={styles.pjWrapper1}>
                                <img alt="" className={styles.pjMainImg1} src={pj3}></img>
                                <div className={styles.pjMainText1}>How Long..? - 모의 구매 및 계산 시뮬레이터
                                    <div className={styles.pjSubText1}> 구매에 필요한 금액과 기간을 계산하는 시뮬레이터 사이트 </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen2, setModalName: setModalOpen2 })}>
                            {modalOpen2 && (windowWidth > 1100 ? <Modal2 /> : <Modal2M />)}
                            <div className={styles.pjWrapper1}>
                                <img alt="" className={styles.pjMainImg1} src={pj2}></img>
                                <div className={styles.pjMainText1}>Chatta - 관심사 기반 채팅방 서비스
                                    <div className={styles.pjSubText1}>유저들이 직접 채팅방을 만들어 소통 할 수 있는 커뮤니티</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pj1} onClick={() => toggleModal({ modalName: modalOpen, setModalName: setModalOpen })}>
                            {modalOpen && (windowWidth > 1100 ? <Modal1 /> : <Modal1M />)}
                            <div className={styles.pjWrapper1}>
                                <img alt="" className={styles.pjMainImg1} src={pj1}></img>
                                <div className={styles.pjMainText1}>Mood Diary - 일기 기록 및 공유 사이트
                                    <div className={styles.pjSubText1}> 누구나 쉽게 짧은 기록을 남기고 서로 공유하는 페이지</div>
                                </div>
                            </div>
                            {/* {modalMessage &&

                                <div className={styles.modalMsgBox}>
                                    <div className={styles.modalMsgImgBox}><img alt="" className={styles.modalMsgImg} src={rotate} /></div>
                                    <div className={styles.modalMsgText}>이미지가 보이지 않으면 가로로 돌려주세요</div>
                                </div>

                            } */}
                        </div>

                        {/* <div className={styles.pj2} onClick={() => toggleModal({ modalName: modalOpen2, setModalName: setModalOpen2 })}>
                        {modalOpen2 && <Modal2 />}
                    </div>
                    <div className={styles.pj3}>box3</div>
                    <div className={styles.pj4}>box4</div> */}
                    </div>
                    <div ref={divRef3} className={styles.bot} id='Info'>
                        <div className={styles.botTitleBox}>
                            <div className={styles.botTitle}>회고록 : <a className={styles.botLink} rel="noreferrer" target="_blank" href='https://velog.io/@votystiq/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D'>포트폴리오 사이트 회고록 (Velog)</a> </div>
                            <br />
                            <div className={styles.botTitle}> © 2024. Kim Min Young. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}