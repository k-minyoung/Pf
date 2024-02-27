import React, { useState } from 'react';
import styles from '../css/modal1.module.css';

import slide1 from "../icon/slide1.png"
import slide2 from "../icon/slide2.png"
import slide3 from "../icon/slide3.png"

export default function Modal() {
    /////////////////////////////////////슬라이드

    interface Slide {
        id: number;
        imageUrl: string;
    }

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    const slides: Slide[] = [
        { id: 1, imageUrl: slide1 },
        { id: 2, imageUrl: slide2 },
        { id: 3, imageUrl: slide3 },
    ];
    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 마지막 인덱스면 ? 0으로 이동, 아니라면 +1의 인덱스로 이동
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };
    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            // 버튼을 눌렀을 당시 index가 첫번째 인덱스면 ? 마지막 인덱스로 이동, 아니라면 -1의 인덱스로 이동
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };


    //////////////////////////
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
        setIsOpen(false);
        console.log(isOpen)
    };

    return (
        <div className={isOpen ? styles.modalOverlay : styles.modalOverlayR} onClick={handleCloseModal}>
            {/* 모달 내부를 클릭하여도 닫히지 않게 함 */}
            <div className={isOpen ? styles.modalContent : styles.modalContentR} onClick={(e) => e.stopPropagation()}>

                <div className={styles.slideShow}>
                    <button onClick={goToPrevSlide}>Previous</button>
                    <img
                        src={slides[currentSlideIndex].imageUrl}
                        alt={`Slide ${slides[currentSlideIndex].id}`}
                    />
                    <button onClick={goToNextSlide}>Next</button>
                </div>
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
                <h2>모달 내용1</h2>
                <p>모달 내용 적기1</p>
                <h2>모달 내용1</h2>
                <p>모달 내용 적기1</p>
                <h2>모달 내용1</h2>
                <p>모달 내용 적기1</p>

            </div>
        </div>
    );
}