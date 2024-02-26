import styles from "../css/modal1.module.css"
import React, { useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal2({ showModal, setShowModal }: Props) {

    // const close = () => {
    //     setShowModal(false)
    // }

    useEffect(() => {
        console.log(showModal); // showModal 값이 변경될 때마다 호출
    }, [showModal]);
    return (
        <>
            <div>
                <div className={showModal ? styles.modalBasic : styles.modalBasicClose}>모달입니다22</div>
            </div>
        </>
    )
}
