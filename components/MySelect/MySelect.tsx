import { SyntheticEvent, useMemo, useState } from "react";
import { IBankData } from "../../modules/modules";
import styles from "./MySelect.module.scss";
import classNames from "classnames";

interface SelectProps {
    filteredValuta: IBankData[];
    value: string;
    defaultValue?: boolean;
    onChange: () => void;
    onClickOption: (e: SyntheticEvent<EventTarget>) => void;
    isChecked: boolean;
    onBlur: () => void;
}

function MySelect({
    filteredValuta,
    value,
    onChange,
    isChecked,
    onClickOption,
    onBlur,
}: SelectProps) {
    const currentValueName = useMemo(() => {
        if (value === "1") {
            return "UKR";
        }

        return filteredValuta.find((v) => v.rate === +value).cc;
    }, [value,filteredValuta]);

    return (
        <div
            onClick={onChange}
            onBlur={onBlur}
            tabIndex={0}
            className={styles.select}>
            <div>{currentValueName}</div>

            <ul
                className={`${styles.containerContent} ${
                    isChecked ? styles.open : ""
                }`}>
                {filteredValuta.map((v) => (
                    <li
                        onClick={onClickOption}
                        className={styles.option}
                        key={v.rate}
                        data-value={v.rate}>
                        {v.cc}
                    </li>
                ))}
            </ul>

            <span
                className={classNames(
                    isChecked
                        ? "after:-rotate-90 after:duration-300"
                        : "after:rotate-90 after:duration-300"
                )}></span>
        </div>
    );
}

export default MySelect;
