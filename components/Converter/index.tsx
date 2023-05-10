import axios from "axios";
import {
    useState,
    useEffect,
    useMemo,
    ChangeEvent,
    SyntheticEvent,
} from "react";
import { environments } from "../../environments";
import { IBankData } from "../../modules/modules";
import helpUkraineText from "../../Sections/HelpUkraine/HelpUkraineText";
import Loader from "../Loader/Loader";
import MySelect from "../MySelect/MySelect";

function Converter() {
    const [valuta, setValuta] = useState<IBankData[]>([]);
    const [inputOne, setInputOne] = useState("1");
    const [inputTwo, setInputTwo] = useState("1");
    const [selectOne, setSelectOne] = useState("1");
    const [selectTwo, setSelectTwo] = useState("1");
    const [isCheckedSelectOne, setIsCheckedSelectOne] = useState(false);
    const [isCheckedSelectTwo, setIsCheckedSelectTwo] = useState(false);
    const regex = /^(([0-9]){0}|(\d+\.{0,1}\d*))$/;
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { errorMessage } = helpUkraineText();

    function selectOneChange() {
        setIsCheckedSelectOne((prev) => !prev);
    }
    function selectTwoChange() {
        setIsCheckedSelectTwo((prev) => !prev);
    }

    function calculateAnotherInput(
        thisInput: string,
        thisSelect: number,
        anotherSelect: number
    ) {
        const result = (+thisInput * thisSelect) / anotherSelect;

        if (!isNaN(result)) {
            return result.toFixed(2);
        } else {
            return "0";
        }
    }

    function onChangeInputOne(e: ChangeEvent<HTMLInputElement>) {
        if (regex.test(e.target.value)) {
            setInputOne(e.target.value);
            setInputTwo(
                calculateAnotherInput(e.target.value, +selectOne, +selectTwo)
            );
        }
    }
    function onChangeInputTwo(e: ChangeEvent<HTMLInputElement>) {
        if (regex.test(e.target.value)) {
            setInputTwo(e.target.value);
            setInputOne(
                calculateAnotherInput(e.target.value, +selectTwo, +selectOne)
            );
        }
    }
    function onChangeSelectOne(e: SyntheticEvent<HTMLDivElement>) {
        if (!(e.target instanceof HTMLDivElement)) {
            return;
        }
        setSelectOne(e.target.dataset.value);
        setInputOne(
            calculateAnotherInput(selectTwo, +inputTwo, +e.target.dataset.value)
        );
    }
    function onChangeSelectTwo(e: SyntheticEvent<HTMLDivElement>) {
        if (!(e.target instanceof HTMLDivElement)) {
            return;
        }

        setSelectTwo(e.target.dataset.value);
        setInputTwo(
            calculateAnotherInput(selectOne, +inputOne, +e.target.dataset.value)
        );
    }

    useEffect(() => {
        async function getValuta() {
            try {
                setLoading(true);
                const data = await axios
                    .get(environments.bankAPI)
                    .then((res) => res.data)
                    .catch(() => setError(errorMessage))
                    .finally(() => setLoading(false));

                setValuta(data);
            } catch (error) {
                setError(errorMessage);
            }
        }
        getValuta();
    }, [errorMessage]);

    const filteredValuta = useMemo(() => {
        const UKR: IBankData = {
            rate: 1,
            cc: "UKR",
            exchangedate: new Date().toString(),
            txt: "Українська гривня",
            r030: 965,
        };
        const valutas = valuta?.filter((v) => {
            if (v.cc === "DKK") {
                setSelectOne(v.rate.toString());
            }

            return v.cc === "USD" || v.cc === "DKK" || v.cc === "EUR";
        });
        valutas.push(UKR);
        return valutas;
    }, [valuta]);

    if (loading) return <Loader className="-top-12" />;
    if (error) return <div>{error}</div>;

    return (
        <div className="inline-grid grid-cols-2 xl:grid-cols-4 gap-2">
            <input
                type="text"
                value={inputOne}
                onChange={onChangeInputOne}
                placeholder="сумма"
                className="py-1 px-2 border-0 rounded focus:outline-0 mr-2"
            />

            <MySelect
                value={selectOne}
                onClickOption={onChangeSelectOne}
                onChange={selectOneChange}
                filteredValuta={filteredValuta}
                isChecked={isCheckedSelectOne}
            />
            <input
                type="text"
                value={inputTwo}
                onChange={onChangeInputTwo}
                placeholder="сумма"
                className="py-1 px-2 border-0 rounded focus:outline-0 mr-2"
            />
            <MySelect
                value={selectTwo}
                isChecked={isCheckedSelectTwo}
                onChange={selectTwoChange}
                onClickOption={onChangeSelectTwo}
                filteredValuta={filteredValuta}
            />
        </div>
    );
}

export default Converter;
