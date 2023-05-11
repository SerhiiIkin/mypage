import { SyntheticEvent, useMemo } from "react";
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
}

function MySelect({
    filteredValuta,
    value,
    onChange,
    isChecked,
    onClickOption,
}: SelectProps) {
    const currentValueName = useMemo(() => {
        if (value === "1") {
            return "UKR";
        }

        return filteredValuta.find((v) => v.rate === +value).cc;
    }, [value]);

    return (
        <div onClick={onChange} onBlurCapture={onChange} className={styles.select}>
            <div>{currentValueName}</div>

            {isChecked && (
                <div className={styles.containerContent}>
                    {filteredValuta.map((v) => {
                        if (v.cc === "DKK") {
                            return (
                                <div
                                    onClick={onClickOption}
                                    className={styles.option}
                                    key={v.rate}
                                    data-value={v.rate}>
                                    {v.cc}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    onClick={onClickOption}
                                    className={styles.option}
                                    key={v.rate}
                                    data-value={v.rate}>
                                    {v.cc}
                                </div>
                            );
                        }
                    })}
                </div>
            )}

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
