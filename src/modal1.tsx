import styles from "./modal1.module.css"
import React, { useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal1({ showModal, setShowModal }: Props) {

    const close = () => {
        setShowModal(false)
    }

    useEffect(() => {
        console.log(showModal); // showModal 값이 변경될 때마다 호출됩니다.
    }, [showModal]);
    return (
        <>
            <div>
                <div className={styles.modalBasic}>모달입니다</div>


            </div>
            <button className={styles.close} onClick={close}>닫기</button>
        </>
    )
}
