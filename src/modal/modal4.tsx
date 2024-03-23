import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/modal4.module.css';

import left from "../icon/left.png"
import right from "../icon/right.png"
import slide1 from "../screenshot/d1.png"
import slide2 from "../screenshot/d2.png"
import slide3 from "../screenshot/d3.png"
import slide4 from "../screenshot/d4.png"
import slide5 from "../screenshot/d5.png"
import slide6 from "../screenshot/d6.png"
import slide7 from "../screenshot/d7.png"
import slide8 from "../screenshot/d8.png"
import slide9 from "../screenshot/d9.png"
import slide10 from "../screenshot/d10.png"
import slide11 from "../screenshot/d11.png"
import slide12 from "../screenshot/d12.png"
import slide13 from "../screenshot/d13.png"
import slide14 from "../screenshot/d14.png"

export default function Modal() {
    const ref = useRef<HTMLUListElement>(null);

    // 슬라이드 ------------------------------------------------------------

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const products = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14]

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

                <div className={styles.textWrapper}>


                    <div className={styles.pageWrapper}>
                        <div className={styles.page}>{currentSlide + 1 + " / " + products.length}</div>
                    </div>
                    <div className={styles.title}>[ Demure ] -  가구 쇼핑몰 </div>
                    <div className={styles.subTitle}>React + Typescript를 주로 이용해 개발한 쇼핑몰입니다. 상품 구성은 IKEA API를 이용했습니다.</div>
                    <hr className={styles.hr} />
                    <div className={styles.modalTextBox}>
                        <div className={styles.range}>
                            <div className={styles.date}>기간</div>
                            <div className={styles.skill}>프론트엔드</div>
                            <div className={styles.skill}>백엔드</div>
                            <div className={styles.framework}>프레임워크 & 라이브러리</div>
                        </div>
                        <div className={styles.rangeText}>
                            <div className={styles.dateText}>2023/08/31 ~ 2023/09/15</div>
                            <div className={styles.skillText}> #HTML  #CSS  #Javascript #Typescript #React</div>
                            <div className={styles.skillText2}> #Node.js #Spring Boot #PostgreSQL </div>
                            <div className={styles.frameworkText}>#Redux #Nest #Axios #Nodemailer</div>
                        </div>
                    </div>
                    <div className={styles.role}>💻나의 기여도</div>
                    <div className={styles.roleText}> - 총 인원 5명이 프로젝트 참여 / 프론트엔드 담당</div>
                    <div className={styles.myRole}>로그인 / 회원가입 페이지 (이미지 2, 3번)</div>
                    <li className={styles.textLi}>useState, onChange를 활용한 실시간 아이디 중복 체크와 유효성 검사</li>
                    {/* target.value를 이용해 값을 항상 감시, 값이 바뀔 때마다 Axios 통신으로 중복 체크  */}
                    <li className={styles.textLi}>nodemailer를 이용한 이메일 인증과 타이머 (시간 초과시 인증번호 재전송 버튼 활성화)</li>
                    <li className={styles.textLi}>카카오API를 이용한 간단한 카카오 로그인</li>
                    <div className={styles.myRole}>상품 목록 / 검색 페이지 (이미지 5, 6번)</div>
                    <li className={styles.textLi}>Axios통신으로 상품 색상 & 가격순 정렬 / 스크롤 위치 추적으로 무한 스크롤 상품목록 구현</li>
                    <li className={styles.textLi}>세일중인 항목 표시, 클릭 시 상품 정보 페이지(이미지 9번)로 이동</li>
                    <div className={styles.myRole}>이벤트 & 기획전 페이지(이미지 7, 8번)</div>
                    <li className={styles.textLi}>쿠폰 발급과 기획전 컨셉에 맞는 상품 목록 표시</li>
                    <li className={styles.textLi}>이벤트 가구에 마우스 호버 시 상품 정보 표시 및 클릭시 이동</li>
                    <div className={styles.myRole}>프로필 페이지(이미지 12번)</div>
                    <li className={styles.textLi}>회원 정보, 주문 내역, 주소, 문의내역,보유 쿠폰 및 회원정보 수정 가능</li>
                    <li className={styles.textLi}>주문 내역의 상품 이름 클릭 시 주문 내역 페이지(이미지 13번)로 이동</li>
                    <li className={styles.textLi}>내역이 없는 경우 내역없음 메세지 표시</li>
                    <div className={styles.myRole}>주문 내역 페이지(이미지 13번)</div>
                    <li className={styles.textLi}>주문 취소 기능</li>
                    <div className={styles.myRole}>회원정보 수정 페이지(이미지 14번)</div>
                    <li className={styles.textLi}>이메일을 제외한 이름, 비밀번호 변경 가능, 실시간 유효성 검사</li>
                    <li className={styles.textLi}>회원 탈퇴 기능</li>
                    <div className={styles.important}>📝개발 중점사항</div>
                    <li className={styles.textLi}>결제를 포함 실제 쇼핑몰의 모든 기능을 구현하는데에 중점을 둠</li>
                    <li className={styles.textLi}>원활한 유지보수를 위해 깔끔한 코드와 디테일한 주석 작성</li>
                    <li className={styles.textLi}>쇼핑몰 특유의 데이터를 불러오는 시간이 긴 단점 보완</li>
                    <li className={styles.textLi}>고급스럽고 깔끔한 느낌을 줄 수 있는 css와 메인페이지</li>
                    <div className={styles.important}>📓프로젝트 회고록</div>
                    <a className={styles.link} href='https://url.kr/omcgys' target="_blank">4차 - 팀프로젝트 회고록 (Velog)</a>
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