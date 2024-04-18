import { useEffect } from "react";
import useCyberStore from "../useCyberStore";
import useDice from "../utils/useDice";
import useMake from "../utils/useMake";

export default function MakeStats() {

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
            setAssignType(3);
        }
    }, [])

    const coreStat = (short: string, long: string) => {
        return (<>
            <span className="colFlex alignFlex">
                <span className="formInputTitle">
                    {long}
                </span>
                <input
                    name={short}
                    type={"number"}
                    className={"formInputField statInputField"}
                    placeholder={short.toLocaleUpperCase()}
                    autoComplete={"off"}
                    min={0}
                    max={10}
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
            {assignType === 1 &&
                <div className={"formInput colFlex"}>
                    <span
                        className={"formInputTitle"}
                        style={{ marginBottom: "0.5em" }}>
                        <b>7d10 (3 min)</b> rolled.<br />
                        To roll again,<br />
                        click "Roll" again.
                    </span>
                    <span className={"formInputTitle bigFormTitle"}>
                        <b className="red">{numsRolled[0]}</b> - <b className="red">{numsRolled[1]}</b> - <b className="red">{numsRolled[2]}</b> - <b className="red">{numsRolled[3]}</b> - <b className="red">{numsRolled[4]}</b> - <b className="red">{numsRolled[5]}</b> - <b className="red">{numsRolled[6]}</b><br />
                        Sum is <b className="red">{sumArr(numsRolled)}</b>
                    </span>
                </div>}

            {/* IZBERI NUM TO ASSIGN */}
            {assignType === 2 &&
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        How much do you want to assign?<br />
                        Average roll would be 45-46.
                    </span>
                    <input
                        name="assignNum"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"30 / 40 / 45 / 50 / 60"}
                        autoComplete={"off"}
                        min={20}
                        max={80}
                        onChange={(e) => setNumToAssign(Number(e.target.value))}
                        onWheel={numberInputOnWheelPreventChange}
                        required>
                    </input>
                </label>}

            {/* ASSIGN NUM LEFT */}
            {assignType === 2 &&
                numToAssign &&
                <span className={"formInputTitle bigFormTitle"}>
                    You have <b className="red">{numToAssign - sumStats(statsForm)}</b> stat points{numToAssign - sumStats(statsForm) > 0 ? " left" : ""}!
                </span>}

            {assignType !== 0 &&
                (numToAssign || numsRolled.length > 0) &&
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
                </div>}

            {/* ASSIGN NUM LEFT */}
            {assignType === 3 && sumStats(statsInfo) > 10 &&
                <span className={"formInputTitle bigFormTitle"}>
                    <span style={{ alignmentBaseline: "baseline" }}>Body Type <b className="red">{statsInfo.body}</b><br /></span>
                    Coolness <b className="red">{statsInfo.cool}</b><br />
                    Empathy <b className="red">{statsInfo.emp}</b><br />
                    Intelligence <b className="red">{statsInfo.int}</b><br />
                    Luck <b className="red">{statsInfo.luck}</b><br />
                    Reflexes <b className="red">{statsInfo.ref}</b><br />
                    Technical Abilty <b className="red">{statsInfo.tech}</b>
                </span>}

            {/*GUMBI ZA FORM*/}
            {assignType !== 0 &&
                (numToAssign || numsRolled.length > 0 || sumStats(statsInfo) > 10) &&
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
                </div>}

        </form>

    </>)
}