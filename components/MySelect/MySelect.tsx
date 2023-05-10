import { SyntheticEvent, useId, useMemo } from "react";
import { IBankData } from "../../modules/modules";
import styles from "./MySelect.module.scss";

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
    const id = useId()
    

    const currentValueName = useMemo(() => {
        if (value === "1") {
            return "UKR";
        }

        return filteredValuta.find((v) => v.rate === +value).cc;
    }, [value]);

    return (
        <label htmlFor={`${id}`} className={styles.select}>
            <input
                id={`${id}`}
                checked={isChecked}
                onChange={onChange}
                className="hidden"
                type="checkbox"
            />

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
            
            <span></span>
        </label>
    );
}

export default MySelect;
