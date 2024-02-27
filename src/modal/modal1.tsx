import React, { useState } from 'react';
import styles from '../css/modal1.module.css'; // 모달 스타일링을 위한 CSS 파일 import


export default function Modal() {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
        setIsOpen(false);
        console.log(isOpen)
    };

    return (
        <div className={isOpen ? styles.modalOverlay : styles.modalOverlayR} onClick={handleCloseModal}>
            {/* 모달 내부를 클릭하여도 닫히지 않게 함 */}
            <div className={isOpen ? styles.modalContent : styles.modalContentR} onClick={(e) => e.stopPropagation()}>
                <h2>모달 내용1</h2>
                <p>모달 내용 적기1</p>
            </div>
        </div>
    );
}