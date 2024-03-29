import bird from "./img/bird.jpg";
import birds from "./img/birds.jpg";
import cat1 from "./img/cat1.jpg";
import cat2 from "./img/cat2.jpg";
import cat3 from "./img/cat3.jpg";
import rabbit from "./img/rabbit.jpg";

import useCheckBoxHook from "../../hooks/useCheckboxHook";
import { useState, MouseEvent } from "react";
import TextFormIsHuman from "./TextFormIsHuman";
import Image from "next/image";
import { IFormIsHuman } from "../../modules/modules";

import styles from "./FromIsHuman.module.scss";

function FormIsHuman({ isMatch, openCheckBox, setOpenCheckBox }: IFormIsHuman) {
    const isBird = useCheckBoxHook();
    const isBirds = useCheckBoxHook();
    const isCat1 = useCheckBoxHook();
    const isCat2 = useCheckBoxHook();
    const isCat3 = useCheckBoxHook();
    const isRabbit = useCheckBoxHook();

    const { title, errorMessage } = TextFormIsHuman();

    const [error, setError] = useState("");

    function onOkClick(event: MouseEvent<HTMLButtonElement>) {
        if (
            isCat1.checked &&
            isCat2.checked &&
            isCat3.checked &&
            !isBird.checked &&
            !isRabbit.checked &&
            !isBirds.checked
        ) {
            setError("");
            isCat1.onreset(false);
            isCat2.onreset(false);
            isCat3.onreset(false);
            isBird.onreset(false);
            isBirds.onreset(false);
            isRabbit.onreset(false);
            isMatch(true);
        } else {
            isMatch(false);
            setError(errorMessage);
        }
    }

    function onCloseBtnClick() {
        setOpenCheckBox(false);
    }

    return (
        <>
            {openCheckBox && (
                <div className={styles.isHuman}>
                    <div className={styles.isHuman__header}>
                        <h2>{title}</h2>
                        <button onClick={onCloseBtnClick}>&times;</button>
                    </div>

                    <label htmlFor="bird">
                        <input
                            type="checkbox"
                            id="bird"
                            checked={isBird.checked}
                            onChange={isBird.onChange}
                        />
                        <Image src={bird} alt="bird" />
                    </label>
                    <label htmlFor="birds">
                        <input
                            type="checkbox"
                            id="birds"
                            checked={isBirds.checked}
                            onChange={isBirds.onChange}
                        />
                        <Image src={birds} alt="bird" />
                    </label>
                    <label htmlFor="cat1">
                        <input
                            type="checkbox"
                            id="cat1"
                            checked={isCat1.checked}
                            onChange={isCat1.onChange}
                        />
                        <Image src={cat1} alt="bird" />
                    </label>
                    <label htmlFor="cat2">
                        <input
                            type="checkbox"
                            id="cat2"
                            checked={isCat2.checked}
                            onChange={isCat2.onChange}
                        />
                        <Image src={cat2} alt="bird" />
                    </label>
                    <label htmlFor="cat3">
                        <input
                            type="checkbox"
                            id="cat3"
                            checked={isCat3.checked}
                            onChange={isCat3.onChange}
                        />
                        <Image src={cat3} alt="bird" />
                    </label>
                    <label htmlFor="rabbit">
                        <input
                            type="checkbox"
                            id="rabbit"
                            checked={isRabbit.checked}
                            onChange={isRabbit.onChange}
                        />
                        <Image src={rabbit} alt="bird" />
                    </label>
                    <span>{error}</span>
                    <button onClick={onOkClick} type="button">
                        Ok
                    </button>
                </div>
            )}
        </>
    );
}

export default FormIsHuman;
