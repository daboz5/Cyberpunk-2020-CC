import { useState } from "react";
import useDatabase from "../utils/useDatabase"
import { Skill } from "../types";

export default function RulesBasics() {

    const { skillArr } = useDatabase();

    const [examineSkill, setExamineSkill] = useState<Skill | undefined>(undefined);

    return (
        <>
            <span>
                <p>{examineSkill?.skill}</p>
                <p>{examineSkill?.stat}</p>
                <p>{examineSkill?.description}</p>
            </span>
            {skillArr.map(
                (skill) => {
                    return (
                        <div key={skill.skill + "Key"}>
                            <button
                                onClick={() => {
                                    examineSkill?.skill === skill.skill ?
                                        setExamineSkill(undefined) :
                                        setExamineSkill(skill)
                                }}>
                                {skill.skill}
                            </button>
                        </div>
                    )
                })}
        </>
    )
}