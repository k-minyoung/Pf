import styles from "../css/modal1.module.css"
import React, { useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>;
    back: boolean;
    setBack: Dispatch<SetStateAction<boolean>>;
}

export default function Modal1({ showModal, setShowModal, back, setBack }: Props) {
    // const [back, setBack] = useState<boolean>(false);

    //모달 닫기
    const close = () => {
        setShowModal(false)
        setBack(false)
        console.log(showModal)
    }

    // const close = () => {
    //     setShowModal(false)
    // }

    useEffect(() => {
        console.log(showModal); // showModal 값이 변경될 때마다 호출
    }, [showModal]);
    return (
        <>
            <div className={back ? styles.back : styles.backR} onClick={close}>
                <div className={showModal ? styles.modalBasic : styles.modalBasicClose}>모달입니다11</div>


            </div>
            {/* <button className={styles.close} onClick={close}>닫기</button> */}
        </>
    )
}
