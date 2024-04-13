import { useState } from "react"
import useDice from "../utils/useDice";

export default function MakeStats() {

    const { dTen } = useDice();

    const [assignType, setAssignType] = useState<0 | 1 | 2>(0);
    const [numsRolled, setNumsRolled] = useState<number[]>([]);
    const [numToAssign, setNumToAssign] = useState<number | undefined>(undefined);

    // const [statsForm, setStatsForm] = useState({
    //     body: 0,
    //     cool: 0,
    //     emp: 0,
    //     int: 0,
    //     luck: 0,
    //     ref: 0,
    //     tech: 0,
    // });

    // const handleStatsFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setStatsForm(prevData => ({ ...prevData, [name]: value }));
    // }

    const rollForStats = (num: number) => {
        const rollArr: number[] = [];
        for (let i = 0; i < num; i++) {
            const roll = dTen()[0];
            roll > 2 ? rollArr.push(roll) : i--;
        }
        setNumsRolled(rollArr);
    };

    const rollNum = (num: number) => { return <b className="red">{numsRolled[num]}</b> }

    return (<>

        {/*FORMA ZA DODELITEV TALENTOV*/}
        <h3>
            Create Character<br />
            (core stats)
        </h3>

        <form
            className="form colFlex">

            <span className={"formInputTitle"}>
                Will you roll for stats<br />
                or assign a fixed number?
            </span>
            <div
                className={"formBtnBox colFlex"}>
                <span className="formNav">
                    <button
                        className={"formBtn colFlex"}
                        type={"button"}
                        onClick={() => {
                            setNumToAssign(undefined)
                            rollForStats(7)
                            setAssignType(1)
                        }}>
                        Roll
                    </button>
                    <button
                        className={"formBtn colFlex"}
                        type={"button"}
                        onClick={() => {
                            setNumsRolled([])
                            setAssignType(2)
                        }}>
                        Assign
                    </button>
                </span>
            </div>

            {/* ASSIGN ROLLS */}
            {assignType === 1 && <>
                <label className={"formInput colFlex"}>
                    <span
                        className={"formInputTitle"}
                        style={{ marginBottom: "0.5em" }}>
                        Dice was rolled.<br />
                        To roll again,<br />
                        click "Roll" again.
                    </span>
                    <span className={"formInputTitle bigFormTitle"}>
                        {rollNum(0)} - {rollNum(1)} - {rollNum(2)} - {rollNum(3)} - {rollNum(4)} - {rollNum(5)} - {rollNum(6)}
                    </span>
                </label>
            </>}

            {/* IZBERI NUM TO ASSIGN */}
            {assignType === 2 && <>
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        How much do you want to assign?<br />
                        Average roll would be 58.
                    </span>
                    <input
                        name="assignNum"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"50 / 60 / 70 / 75 / 80"}
                        autoComplete={"off"}
                        min={20}
                        max={80}
                        onChange={(e) => setNumToAssign(Number(e.target.value))}
                        required>
                    </input>
                </label>
            </>}

            {/* ASSIGN NUM LEFT */}
            {assignType === 2 &&
                numToAssign && <>
                    <span className={"formInputTitle bigFormTitle"}>
                        You have <b className="red">{numToAssign}</b> stat points left!
                    </span>
                </>}

        </form>

    </>)
}