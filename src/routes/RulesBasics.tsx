import { useState } from "react";
import { Skill } from "../types";
import useDatabase from "../utils/useDatabase"

export default function RulesBasics() {

    const { skillArr } = useDatabase();

    const [content, setContent] = useState(skillArr);
    const [examineSkill, setExamineSkill] = useState<Skill | undefined>(undefined);
    const [filterData, setFilterData] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterData(value);

        const filteredContent = skillArr.filter(skill => {
            const stringedSkill = `${skill.stat} ${skill.skill} ${skill.description} ${skill.oridinalOrFortressDescription} ${skill.skill.toLowerCase()}`
            if (stringedSkill.includes(value)) { return skill }
        });
        setContent(filteredContent);
    }

    return (
        <>
            {/* SHOW CONTENT */}
            <span
                id="basicsContentBox"
                className="colFlex">
                <p id="basicsContentTitle">
                    {examineSkill?.skill}
                </p>
                <p
                    id="basicsContentStat"
                    className={`skillStat${examineSkill?.stat}`}>
                    <b>- {examineSkill?.stat ? examineSkill?.stat : "Pick something"} -</b>
                </p>
                <p id="basicsContent">
                    {examineSkill?.description}
                </p>
            </span>

            {/* FILTER CONTENT */}
            <input
                name="basicRulesFilter"
                type={"text"}
                id="basicRulesFilter"
                className={"formInputField roleSkillFilter"}
                placeholder={"Filter: Acting / art / EMP"}
                autoComplete={"off"}
                onChange={handleFilter}
                value={filterData}
                maxLength={20}>
            </input>

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {content.map(
                    (skill) => {
                        return (
                            <button
                                className="basicBtn"
                                onClick={() => {
                                    examineSkill?.skill === skill.skill ?
                                        setExamineSkill(undefined) :
                                        setExamineSkill(skill)
                                }}
                                key={skill.skill + "Key"}>
                                {skill.skill}
                            </button>
                        )
                    })}
            </div>
        </>
    )
}