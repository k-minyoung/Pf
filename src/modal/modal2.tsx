import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/modal2.module.css';

import left from "../icon/left.png"
import right from "../icon/right.png"
import slide1 from "../screenshot/b1.png"
import slide15 from "../screenshot/b15.png"
import slide16 from "../screenshot/b16.png"
import slide2 from "../screenshot/b2.png"
import slide25 from "../screenshot/b25.png"
import slide3 from "../screenshot/b3.png"
import slide4 from "../screenshot/b4.png"
import slide5 from "../screenshot/b5.png"
import slide6 from "../screenshot/b6.png"
import slide7 from "../screenshot/b7.png"

export default function Modal() {
    const ref = useRef<HTMLUListElement>(null);

    // 슬라이드 ------------------------------------------------------------

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const products = [slide1, slide15, slide16, slide2, slide25, slide3, slide4, slide5, slide6, slide7]

    useEffect(() => {
        if (ref.current) {
            ref.current.style.marginLeft = `${-currentSlide * 980}px`;
        }
    }, [currentSlide])

    const nextButtonClick = () => {
        setCurrentSlide((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 마지막 인덱스면 ? 첫번째 인덱스로 가기 / 아니라면 앞 인덱스
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevButtonClick = () => {
        setCurrentSlide((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 첫번째 인덱스면 ? 마지막 인덱스로 가기 / 아니라면 뒷 인덱스
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // 슬라이드 끝 -------------------------------------------------------

    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
        setIsOpen(false);
        console.log(isOpen)
    };
    //////////////
    return (
        <div className={isOpen ? styles.modalOverlay : styles.modalOverlayR} onClick={handleCloseModal}>
            {/* 모달 내부를 클릭하여도 닫히지 않게 함 */}
            <div className={isOpen ? styles.modalContent : styles.modalContentR} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mainImgBox}>
                    <ul ref={ref} className={styles.sliderList}>
                        {products && products.map((i, index) => {

                            return (
                                <>
                                    <li key={index} className={styles.imgLi}>

                                        <img className={styles.imgBox} src={i} />

                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <img src={left} onClick={prevButtonClick} className={styles.prevBtn}></img>
                <img src={right} onClick={nextButtonClick} className={styles.nextBtn}></img>
                <div className={styles.page}>{currentSlide + 1 + " / " + products.length}</div>
                <div className={styles.textWrapper}>


                    <div className={styles.title}>[ Chatta ] -  관심사 기반 채팅방 서비스 </div>
                    <div className={styles.subTitle}>관심사가 다양한 유저들이 모여 직접 채팅방을 만들어 소통 할 수 있는 커뮤니티</div>
                    <hr className={styles.hr} />
                    <div className={styles.modalTextBox}>
                        <div className={styles.range}>
                            <div className={styles.date}>기간</div>
                            <div className={styles.skill}>프론트엔드</div>
                            <div className={styles.skill}>백엔드</div>
                            <div className={styles.framework}>라이브러리 & 모듈</div>
                        </div>
                        <div className={styles.rangeText}>
                            <div className={styles.dateText}>2023/08/31 ~ 2023/09/15</div>
                            <div className={styles.skillText}> #HTML  #CSS  #Javascript</div>
                            <div className={styles.skillText2}> #Node.js #Express #MySQL</div>
                            <div className={styles.frameworkText}>#JQuery | #JWT #Bcrypt #Sequelize #Socket.io #Axios #Nodemailer #ejs</div>
                        </div>
                    </div>
                    <div className={styles.role}>역할</div>
                    <div className={styles.roleText}>총 인원 5명이 함께 개발</div>
                    <div className={styles.myRole}>로그인 / 회원가입 페이지 (이미지 1,2번)</div>
                    <li className={styles.textLi}>JQuery를 이용한 로그인/회원가입 유효성 검사</li>
                    <li className={styles.textLi}>데이터는 Sequelize와 Axios통신을 이용해 MySQL DB에 저장</li>
                    <div className={styles.myRole}>ID/PW찾기 (이미지 3번)</div>
                    <li className={styles.textLi}>Nodemailer를 이용해 회원가입시 입력한 Email로 암호화된 임시 비밀번호 전송</li>
                    {/* <li className={styles.textLi}>임시 비밀번호 전송 직후 회원의 비밀번호를 임시 비밀번호로 수정</li> */}
                    <div className={styles.myRole}>프로필 페이지 수정 / 업데이트 / 삭제 (이미지 8,9,10번)</div>
                    <div className={styles.important}>📝개발 중점사항</div>
                    <li className={styles.textLi}>페이지 이동 시 마다 JWT인증 / 회원정보 저장 암호화로 보안성에 중점을 둠</li>
                    <li className={styles.textLi}>기본적인 소셜 앱에서 제공하는 기능을 모두 구현</li>
                    <li className={styles.textLi}>카테고리별 유저들이 관심있는 곳으로 모일 수 있도록 직관적인 디자인</li>

                    {/* <div className={styles.feedback}>📌보완할 점</div>
                    <li className={styles.textLi}>기능 구현에 중점을 둬 다소 부족했던 CSS디자인</li>
                    <li className={styles.textLi}>모든 기능을 한눈에 볼 수 있는 메인 페이지의 부재</li>
                    <li className={styles.textLi}>ID/PW찾기 시 유저 한 명을 식별할 고유한 정보가 부족</li> */}
                    {/* 
                    <h3>🥇🥈🥉🏅🎖️🏆성과</h3>
                    <div>프로젝트 참여한 7팀 중 최우수상 수상</div> */}
                </div>
            </div>
        </div>
    );
}