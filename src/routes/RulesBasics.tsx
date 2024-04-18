import { useState } from "react";
import useDatabase from "../utils/useDatabase"

export default function RulesBasics() {

    const { statArr, skillArr, roleArr, abilityArr } = useDatabase();

    type BasicRulesContent = {
        type: "stat" | "ability" | "skill" | "role";
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

    const filterTypeCheck = (type: "stat" | "ability" | "skill" | "role") => {
        if (content.filter(content => content.type !== type).length > 0) {
            setContent(
                type === "stat" ? statContent :
                    type === "ability" ? abilityContent :
                        type === "skill" ? skillContent :
                            roleContent)
        } else { setContent(contentArr) }
    }

    return (
        <>
            {/* SHOW CONTENT */}
            <span
                id="basicsContentBox"
                className="colFlex">
                <p id="basicsContentTitle">
                    {examine?.title ? examine.title : "Pick something."}
                </p>
                {examine &&
                    <p
                        id="basicsContentSubtitle"
                        className={`skillStat${examine.subtitle}`}>
                        <b>- {examine.subtitle} -</b>
                    </p>}
                <p id="basicsContent">
                    {examine?.content}
                </p>
            </span>

            {/* FILTER CONTENT */}
            <input
                name="basicInputFilter"
                type={"text"}
                id="basicInputFilter"
                className={"formInputField roleSkillFilter"}
                placeholder={"Filter: Acting / art / EMP"}
                autoComplete={"off"}
                onChange={handleFilter}
                value={filterData}
                maxLength={20}>
            </input>
            <span className="basicFilterBtns flex alignFlex">
                <button
                    className="basicStatBtn"
                    onClick={() => filterTypeCheck("stat")}>
                    Only Stats
                </button>
                <button
                    className="basicAbilityBtn"
                    onClick={() => filterTypeCheck("ability")}>
                    Only Abilities
                </button>
                <button
                    className="basicSkillBtn"
                    onClick={() => filterTypeCheck("skill")}>
                    Only Skills
                </button>
                <button
                    className="basicRoleBtn"
                    onClick={() => filterTypeCheck("role")}>
                    Only Roles
                </button>
            </span>

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {content.map(content => {
                    return (
                        <button
                            className={
                                content.type === "stat" ? "basicStatBtn" :
                                    content.type === "ability" ? "basicAbilityBtn" :
                                        content.type === "skill" ? "basicSkillBtn" :
                                            content.type === "role" ? "basicRoleBtn" :
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