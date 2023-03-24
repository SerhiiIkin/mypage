import { ChangeEvent } from "react";
import { IBankData } from "../../modules/modules";

interface SelectProps {
    filteredValuta: IBankData[];
    value: string;
    defaultValue?: boolean;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
    filteredValuta,
    value,
    onChange,
}: SelectProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="appearance-none py-1 px-2 rounded-xl bg-yellow-400 focus:outline-0 mr-2">
            <option value="1">UKR</option>
            {filteredValuta.map((v) => {
                if (v.cc === "DKK") {
                    return (
                        <option key={v.rate} value={v.rate}>
                            {v.cc}
                        </option>
                    );
                } else {
                    return (
                        <option key={v.rate} value={v.rate}>
                            {v.cc}
                        </option>
                    );
                }
            })}
        </select>
    );
}

export default Select;
