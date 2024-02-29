import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/modal1.module.css';

import left from "../icon/left.png"
import right from "../icon/right.png"
import slide1 from "../screenshot/a1.png"
import slide2 from "../screenshot/a2.png"
import slide3 from "../screenshot/a3.png"
import slide4 from "../screenshot/a4.png"

export default function Modal() {
    const ref = useRef<HTMLUListElement>(null);

    // 슬라이드 ------------------------------------------------------------

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const products = [slide1, slide2, slide3, slide4]

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


                    <h2>[ Mood Diary ] - 일기 기록 및 공유 사이트 </h2>
                    <div>누구나 쉽게 접근하여 짧은 기록을 남기고 서로 공유할 수 있는 페이지</div>
                    <div className={styles.modalTextBox}>
                        <div className={styles.range}>
                            <div>기간</div>
                            <div>기술</div>
                            <div>프레임워크 & 라이브러리</div>
                        </div>
                        <div className={styles.rangeText}>
                            <div>2023/07/07 ~ 2023/07/26</div>
                            <div>프론트엔드 - #HTML  #CSS  #Javascript </div>
                            <div>#Bootstrap  #JQuery #Swiper.js</div>
                        </div>
                    </div>


                    <h3>역할</h3>
                    <div>총 인원 4명이 함께 개발</div>
                    <div>Friedns 페이지 개발 (이미지 2,3번)</div>
                    <li className={styles.textLi}>Swiper.js 라이브러리를 이용한 카드 슬라이드 기능</li>
                    <li className={styles.textLi}>JQuery를 이용한 댓글 작성 기능과 좋아요 버튼 및 카운트 기능</li>
                    <h3>📝개발 중점사항</h3>
                    <li className={styles.textLi}>주요 이용 타겟층 설정 후 초점을 맞춰 개발</li>
                    <li className={styles.textLi}>사용자 친화적 UI / UX 및 간결하고 심플한 디자인</li>
                    <li className={styles.textLi}>독자적인 이모티콘 디자인으로 개성 및 접근성 향상</li>

                    <h3>📌미흡했던 점</h3>
                    <li className={styles.textLi}>UI / UX에 중점을 두었으나 반응형 구현이 부족했던 점</li>
                    <li className={styles.textLi}>재사용에 용이한 코드를 작성하지 못한 점</li>
                    <li className={styles.textLi}>로그인 및 닉네임 설정 구현을 하지 못한 점</li>

                    {/* <h3>성과</h3>
                    <div>프로젝트 참여한 7팀 중 최우수상 수상</div> */}
                </div>
            </div>
        </div>
    );
}