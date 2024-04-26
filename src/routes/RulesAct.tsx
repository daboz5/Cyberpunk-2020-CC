import { useState } from "react"
import useDatabase from "../utils/useDatabase";
import { Rule } from "../types";

export default function RulesAct() {

    const {
        moveArr,
        fightArr,
        healArr
    } = useDatabase();

    const contentArr = moveArr
        .concat(fightArr)
        .concat(healArr)
        .sort((a, b) => {
            const first = a.title;
            const second = b.title;
            return (
                first < second ? -1 :
                    first > second ? 1 :
                        0
            )
        });

    const [content, setContent] = useState(contentArr);
    const [examine, setExamine] = useState<Rule | undefined>(undefined);
    const [filterData, setFilterData] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterData(value);
        const filteredContent = contentArr.filter(content => {
            const stringed = `${content.title} ${content.subtitle} ${content.content} ${content.title.toLowerCase()}`
            if (stringed.includes(value)) { return content }
        });
        setContent(filteredContent);
    }

    const filterTypeCheck = (type: "move" | "fight" | "heal" | "all") => {
        setContent(
            type === "move" ? moveArr :
                type === "fight" ? fightArr :
                    type === "heal" ? healArr :
                        contentArr)
    }

    return (
        <>
            {/* SHOW CONTENT */}
            <span
                className="colFlex contentBox">
                <p className="contentTitle">
                    {examine?.title ? examine.title : "Pick something."}
                </p>
                {examine &&
                    <p
                        className={`contentSubtitle skillStat${examine.subtitle}`}>
                        <b>- {examine.subtitle} -</b>
                    </p>}
                <p className="content">
                    {examine?.content}
                </p>
            </span>

            {/* FILTER CONTENT */}
            <input
                name="basicInputFilter"
                type={"text"}
                className={"formInputField roleSkillFilter contentInputFilter"}
                placeholder={"Filter: Move / Fight / Heal"}
                autoComplete={"off"}
                onChange={handleFilter}
                value={filterData}
                maxLength={20}>
            </input>
            <span className="basicFilterBtns flex alignFlex">
                <button
                    className="basicStatBtn"
                    onClick={() => filterTypeCheck("move")}>
                    Only Move
                </button>
                <button
                    className="basicAbilityBtn"
                    onClick={() => filterTypeCheck("fight")}>
                    Only Fight
                </button>
                <button
                    className="basicSkillBtn"
                    onClick={() => filterTypeCheck("heal")}>
                    Only Heal
                </button>
                <button
                    className="basicRoleBtn"
                    onClick={() => filterTypeCheck("all")}>
                    All Content
                </button>
            </span>

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {content.map(content => {
                    return (
                        <button
                            className={
                                content.type === "move" ? "basicStatBtn" :
                                    content.type === "fight" ? "basicAbilityBtn" :
                                        content.type === "heal" ? "basicSkillBtn" :
                                            ""}
                            onClick={() => {
                                if (examine && examine.title === content.title) {
                                    setExamine(undefined)
                                }
                                else { setExamine(content) }
                            }}
                            key={content.title + "Key"}>
                            {content.title}
                        </button>
                    )
                })}
            </div>
        </>
    )
}