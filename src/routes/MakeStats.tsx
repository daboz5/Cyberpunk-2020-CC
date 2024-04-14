import { useEffect } from "react";
import useCyberStore from "../useCyberStore";
import useDice from "../utils/useDice";
import useMake from "../utils/useMake";

export default function MakeStats() {

    type statsId = "body" | "cool" | "emp" | "int" | "luck" | "ref" | "tech"

    const { statsInfo } = useCyberStore();
    const { sumArr } = useDice();
    const {
        statsForm,
        setStatsForm,
        handleStatsFormChange,
        assignType,
        setAssignType,
        numToAssign,
        setNumToAssign,
        numsRolled,
        setNumsRolled,
        sumStats,
        rollForStats,
        numberInputOnWheelPreventChange,
        handleStatsSubmit
    } = useMake();

    useEffect(() => {
        if (sumStats(statsInfo) > 10) {
            setStatsForm(statsInfo);
            setAssignType(2);
            setNumToAssign(sumStats(statsInfo));
        }
    }, [])

    const rollNum = (num: number) => { return <b className="red">{num}</b> }

    const coreStat = (id: statsId, long: string) => {
        return (<>
            <span className="colFlex alignFlex">
                <span className="formInputTitle">
                    {long}
                </span>
                <input
                    name={id}
                    type={"number"}
                    className={"formInputField statInputField"}
                    autoComplete={"off"}
                    min={0}
                    max={10}
                    value={statsForm[id]}
                    onChange={handleStatsFormChange}
                    required>
                </input>
            </span>
        </>)
    }

    return (<>

        {/*FORMA ZA DODELITEV TALENTOV*/}
        <h3>
            Create Character<br />
            (core stats)
        </h3>

        <form
            className="form colFlex"
            onSubmit={handleStatsSubmit}>

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
                <div className={"formInput colFlex"}>
                    <span
                        className={"formInputTitle"}
                        style={{ marginBottom: "0.5em" }}>
                        <b>7d10 (3 min)</b> rolled.<br />
                        To roll again,<br />
                        click "Roll" again.
                    </span>
                    <span className={"formInputTitle bigFormTitle"}>
                        {rollNum(numsRolled[0])} - {rollNum(numsRolled[1])} - {rollNum(numsRolled[2])} - {rollNum(numsRolled[3])} - {rollNum(numsRolled[4])} - {rollNum(numsRolled[5])} - {rollNum(numsRolled[6])}<br />
                        Sum is {rollNum(sumArr(numsRolled))}
                    </span>
                </div>
            </>}

            {/* IZBERI NUM TO ASSIGN */}
            {assignType === 2 && <>
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        How much do you want to assign?<br />
                        Average roll would be 45-46.
                    </span>
                    <input
                        name="assignNum"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"30 / 40 / 50 / 55 / 60"}
                        autoComplete={"off"}
                        min={20}
                        max={80}
                        onChange={(e) => setNumToAssign(Number(e.target.value))}
                        onWheel={numberInputOnWheelPreventChange}
                        required>
                    </input>
                </label>
            </>}

            {/* ASSIGN NUM LEFT */}
            {assignType === 2 &&
                numToAssign && <>
                    <span className={"formInputTitle bigFormTitle"}>
                        You have <b className="red">{numToAssign - sumStats(statsForm)}</b> stat points{numToAssign - sumStats(statsForm) > 0 ? " left" : ""}!
                    </span>
                </>}

            {assignType !== 0 &&
                (numToAssign || numsRolled.length > 0) &&
                <>
                    <div className={"formInput colFlex"}>
                        <span className={"formInputTitle"}>
                            Assign points to your core stats
                        </span>
                        <span className="flex alignFlex statInputFieldBox">
                            {coreStat("body", "Body Type")}
                            {coreStat("cool", "Coolness")}
                            {coreStat("emp", "Empathy")}
                            {coreStat("int", "Intelligence")}
                            {coreStat("luck", "Luck")}
                            {coreStat("ref", "Reflexes")}
                            {coreStat("tech", "Technical")}
                        </span>
                    </div>
                    {/*GUMBI ZA FORM*/}
                    <div
                        className={"formBtnBox colFlex"}>
                        <span className="formNav">
                            <button
                                className={"formBtn colFlex"}
                                type={"reset"}
                                onClick={() => {
                                    setNumToAssign(undefined)
                                    setNumsRolled([])
                                    setAssignType(0)
                                }}>
                                Reset
                            </button>
                            <button
                                className={"formBtn colFlex"}
                                type={"submit"}>
                                Next
                            </button>
                        </span>
                    </div>
                </>}

        </form>

    </>)
}