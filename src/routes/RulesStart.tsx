import { useState } from "react";
import useDatabase from "../utils/useDatabase"

export default function RulesStart() {

    const { statArr, skillArr, roleArr, abilityArr } = useDatabase();

    type FilterType = "role" | "ability" | "stat" | "skill" | "all"

    type BasicRulesContent = {
        type: FilterType;
        title: string;
        subtitle: string;
        content: string;
        oldContent: string;
    }

    const statContent: BasicRulesContent[] = statArr.map(
        stat => {
            return {
                type: "stat",
                title: stat.stat,
                subtitle: stat.short,
                content: stat.description,
                oldContent: stat.oldDescription
            }
        }
    )
    const abilityContent: BasicRulesContent[] = abilityArr.map(
        ability => {
            return {
                type: "ability",
                title: ability.ability,
                subtitle: ability.stat,
                content: ability.description,
                oldContent: ability.oldDescription
            }
        }
    );
    const skillContent: BasicRulesContent[] = skillArr.map(
        skill => {
            return {
                type: "skill",
                title: skill.skill,
                subtitle: skill.stat,
                content: skill.description,
                oldContent: skill.oldDescription
            }
        }
    );
    const roleContent: BasicRulesContent[] = roleArr.map(
        role => {
            return {
                type: "role",
                title: role.job,
                subtitle: role.skill,
                content: role.description,
                oldContent: role.oldDescription
            }
        }
    );

    const contentArr = statContent
        .concat(abilityContent)
        .concat(skillContent)
        .concat(roleContent)
        .sort((a, b) => {
            const first = a.title.toLocaleUpperCase();
            const second = b.title.toLocaleUpperCase();
            return (
                first < second ? -1 :
                    first > second ? 1 :
                        0
            )
        });

    const [content, setContent] = useState(contentArr);
    const [examine, setExamine] = useState<BasicRulesContent | undefined>(undefined);
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
        const pickArr = type === "role" ? roleContent :
            type === "ability" ? abilityContent :
                type === "stat" ? statContent :
                    type === "skill" ? skillContent :
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
                    {createInfoBtn("All Content", "all", 6)}
                </span>
                <span className="flex basicFilterBtns">
                    {createInfoBtn("Only Roles", "role", 7)}
                    {createInfoBtn("Only Abilities", "ability", 1)}
                </span>
                <span className="flex basicFilterBtns">
                    {createInfoBtn("Only Stats", "stat", 2)}
                    {createInfoBtn("Only Skills", "skill", 3)}
                </span>
            </span>

            {/* FILTER CONTENT */}
            <input
                name="basicInputFilter"
                type={"text"}
                className={"formInputField roleSkillFilter contentInputFilter"}
                placeholder={"Filter: Acting / art / EMP"}
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

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {content.map(content => {
                    return (
                        <button
                            className={
                                content.type === "role" ? "infoBtn7" :
                                    content.type === "ability" ? "infoBtn1" :
                                        content.type === "stat" ? "infoBtn2" :
                                            content.type === "skill" ? "infoBtn3" :
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