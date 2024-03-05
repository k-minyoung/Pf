import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/modal2.module.css';

import left from "../icon/left.png"
import right from "../icon/right.png"
import slide1 from "../screenshot/c1.png"
import slide2 from "../screenshot/c2.png"
import slide3 from "../screenshot/c3.png"
import slide4 from "../screenshot/c4.png"
import slide5 from "../screenshot/c5.png"
import slide6 from "../screenshot/c6.png"
import slide7 from "../screenshot/c7.png"
import slide8 from "../screenshot/c8.png"

export default function Modal() {
    const ref = useRef<HTMLUListElement>(null);

    // 슬라이드 ------------------------------------------------------------

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const products = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]

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


                    <div className={styles.title}>[ How Long..? ] - 모의 구매 및 계산 시뮬레이터 </div>
                    <div className={styles.subTitle}>구매에 필요한 금액과 기간을 계산해주는 시뮬레이터 사이트 </div>
                    <hr className={styles.hr} />
                    <div className={styles.modalTextBox}>
                        <div className={styles.range}>
                            <div className={styles.date}>기간</div>
                            <div className={styles.skill}>프론트엔드</div>
                            {/* <div className={styles.skill}>백엔드</div> */}
                            <div className={styles.framework}>라이브러리 & API</div>
                        </div>
                        <div className={styles.rangeText}>
                            <div className={styles.dateText}>2023/10/11 ~ 2023/10/18</div>
                            <div className={styles.skillText}> #HTML  #CSS #Javascript #React </div>
                            {/* <div className={styles.skillText2}> #Node.js #Express #MySQL</div> */}
                            <div className={styles.frameworkText}>#Redux #React-Router-DOM #Tailwind CSS #네이버API</div>
                        </div>
                    </div>
                    <div className={styles.role}>💻나의 기여도</div>
                    <div className={styles.roleText}> - 개인 프로젝트</div>
                    <div className={styles.myRole}>메인 페이지 (이미지 1번)</div>
                    <li className={styles.textLi}>React-Router-DOM의 Link를 이용한 페이지 구분</li>
                    <div className={styles.myRole}>쇼핑 페이지 (이미지 2, 3, 4, 5번)</div>
                    <li className={styles.textLi}>네이버API를 이용한 상품 검색, 상품 이미지 클릭 시 네이버 쇼핑사이트로 연결</li>
                    <li className={styles.textLi}>담기 클릭 시 Array를 이용한 페이지 아래에 장바구니 생성 및 상품목록 삭제 기능</li>
                    <li className={styles.textLi}>구매 시 사용자 정보를 입력받아 State에 저장</li>
                    <li className={styles.textLi}>입력받은 정보를 기반으로 금액 및 기간 계산</li>
                    <div className={styles.myRole}>부동산 페이지 (이미지 6, 7, 8번)</div>
                    <li className={styles.textLi}>서울시 제공 부동산 실거래가 내역을 이용한 부동산 목록</li>
                    <li className={styles.textLi}>위치정보 클릭 시 해당 부동산의 네이버 지도로 연결해주는 위치정보 기능</li>
                    <li className={styles.textLi}>중첩 가능한 평수 / 구분 / 지역 정렬과 정렬 초기화 기능</li>
                    <li className={styles.textLi}>구매해보기 클릭 시 Flow는 쇼핑과 같음</li>
                    <div className={styles.important}>📝개발 중점사항</div>
                    <li className={styles.textLi}>익숙하지 않은 기술들을 연습하기 위한 프로젝트</li>
                    <li className={styles.textLi}>Redux, Tailwind CSS, React-Router-DOM을 이용해 효율적인 코드를 짜는데에 중점을 둠</li>
                    <li className={styles.textLi}>사용자가 비정상적인 데이터를 입력했을 때를 대비해 데이터 입력 범위 제한, 오작동을 방지</li>

                    {/* <div className={styles.feedback}>📌보완할 점</div>
                    <li className={styles.textLi}>기능 구현에 중점을 둬 다소 부족했던 CSS디자인</li>
                    <li className={styles.textLi}>모든 기능을 한눈에 볼 수 있는 메인 페이지의 부재</li>
                    <li className={styles.textLi}>ID/PW찾기 시 유저 한 명을 식별할 고유한 정보가 부족</li> */}

                    {/* <h3>성과</h3>
                    <div>프로젝트 참여한 7팀 중 최우수상 수상</div> */}
                </div>
            </div>
        </div>
    );
}