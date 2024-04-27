import { useState } from "react"
import useDatabase from "../utils/useDatabase";
import { Rule } from "../types";

export default function RulesAct() {

    type FilterType = "start" | "move" | "fight" | "heal" | "learn" | "upgrade" | "all"

    const {
        moveArr,
        fightArr,
        healArr,
        learnArr,
        startArr,
        upgradeArr
    } = useDatabase();

    const contentArr = startArr
        .concat(moveArr)
        .concat(fightArr)
        .concat(healArr)
        .concat(learnArr)
        .concat(upgradeArr)
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

    const filterTypeCheck = (type: FilterType) => {
        const pickArr = type === "start" ? startArr :
            type === "move" ? moveArr :
                type === "fight" ? fightArr :
                    type === "heal" ? healArr :
                        type === "learn" ? learnArr :
                            type === "upgrade" ? upgradeArr :
                                contentArr
        const sortedArr = pickArr.sort((a, b) => {
            const first = a.title;
            const second = b.title;
            return (
                first < second ? -1 :
                    first > second ? 1 :
                        0
            )
        });
        setContent(sortedArr);
    }

    const createInfoBtn = (
        name: string, filter: FilterType, color: number
    ) => {
        return (
            <button
                className={`infoBtn${color}`}
                onClick={() => filterTypeCheck(filter)}>
                {name}
            </button>
        )
    }

    return (
        <>
            {/*FILTER BY TYPE BTNS*/}
            <span className="colFlex alignFlex filterBtnsBox">
                <span className="flex basicFilterBtns">
                    {createInfoBtn("All Content", "all", 4)}
                </span>
                <span className="flex basicFilterBtns">
                    {createInfoBtn("Only Start", "start", 5)}
                    {createInfoBtn("Only Move", "move", 3)}
                    {createInfoBtn("Only Fight", "fight", 2)}
                </span>
                <span className="flex basicFilterBtns">
                    {createInfoBtn("Only Heal", "heal", 1)}
                    {createInfoBtn("Only Learn", "learn", 6)}
                    {createInfoBtn("Only Upgrade", "upgrade", 7)}
                </span>
            </span>

            {/* FILTER CONTENT */}
            <input
                name="basicInputFilter"
                type={"text"}
                className={"formInputField roleSkillFilter contentInputFilter"}
                placeholder={"Filter: Info on ..."}
                autoComplete={"off"}
                onChange={handleFilter}
                value={filterData}
                maxLength={20}>
            </input>
            <p className="explainFilter">
                Title, subtitle and content will be checked for match.
            </p>

            {/* SHOW CONTENT */}
            <span
                className="colFlex contentBox">
                <p className="contentTitle">
                    {examine?.title ? examine.title : "Pick something"}
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

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {content.map(content => {
                    return (
                        <button
                            className={
                                content.type === "start" ? "infoBtn5" :
                                    content.type === "move" ? "infoBtn3" :
                                        content.type === "fight" ? "infoBtn2" :
                                            content.type === "heal" ? "infoBtn1" :
                                                content.type === "learn" ? "infoBtn6" :
                                                    content.type === "upgrade" ? "infoBtn7" :
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