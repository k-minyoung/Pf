import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/modal1.module.css';

import left from "../icon/left.png"
import right from "../icon/right.png"
import slide1 from "../icon/slide1.png"
import slide2 from "../icon/slide2.png"
import slide3 from "../icon/slide3.png"

export default function Modal() {
    const ref = useRef<HTMLUListElement>(null);

    // 슬라이드 ------------------------------------------------------------

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const products = [slide1, slide2, slide3]

    useEffect(() => {
        if (ref.current) {
            ref.current.style.marginLeft = `${-currentSlide * 784}px`;
        }
    }, [currentSlide])

    const nextButtonClick = () => {
        setCurrentSlide((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 마지막 인덱스면 ? 가만히 있기 / 아니라면 앞 인덱스
            prevIndex === products.length - 1 ? products.length - 1 : prevIndex + 1
        );
    };
    const prevButtonClick = () => {
        setCurrentSlide((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 첫번째 인덱스면 ? 가만히 있기 / 아니라면 뒷 인덱스
            prevIndex === 0 ? 0 : prevIndex - 1
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
                                    <li key={index}>

                                        <img className={styles.imgBox} src={i} />

                                    </li>
                                </>
                            )
                        })}
                    </ul>
                    <img src={left} onClick={prevButtonClick} className={styles.prevBtn}></img>
                    <img src={right} onClick={nextButtonClick} className={styles.nextBtn}></img>
                </div>
                <div className={styles.page}>{currentSlide + 1 + " / " + products.length}</div>
                <div className={styles.text}>
                    <h2>프로젝트 요약</h2>
                    <p>Mood Diary - 일기 기록 및 공유 앱 / 누구나 쉽게 접근하여 짧은 기록을 남기고 서로 공유할 수 있는 페이지</p>
                    <h3>기간</h3>
                    <p>2023/07/07 → 2023/07/26</p>
                    <h3>기술</h3>
                    <p>프론트엔드</p>
                    <p>HTML CSS Javascript JQuery swiper.js</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                    <h2>모달 내용1</h2>
                    <p>모달 내용 적기1</p>
                </div>
            </div>
        </div>
    );
}