import { useState } from "react";
import { Role, Skill } from "../types";
import useDatabase from "../utils/useDatabase"

export default function RulesBasics() {

    const { roleArr, skillArr } = useDatabase();

    const [skills, setSkills] = useState(skillArr);
    const [roles, setRoles] = useState(roleArr);
    const [examineSkill, setExamineSkill] = useState<Skill | undefined>(undefined);
    const [examineRole, setExamineRole] = useState<Role | undefined>(undefined);
    const [filterData, setFilterData] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterData(value);

        const filteredSkills = skillArr.filter(skill => {
            const stringedSkill = `${skill.stat} ${skill.skill} ${skill.description} ${skill.oridinalOrFortressDescription} ${skill.skill.toLowerCase()}`
            if (stringedSkill.includes(value)) { return skill }
        });
        setSkills(filteredSkills);
        const filteredRoles = roleArr.filter(role => {
            const stringedSkill = `${role.job} ${role.skill} ${role.description} ${role.oridinalOrFortressDescription} ${role.job.toLowerCase()}`
            if (stringedSkill.includes(value)) { return role }
        });
        setRoles(filteredRoles);
    }

    return (
        <>
            {/* SHOW CONTENT */}
            <span
                id="basicsContentBox"
                className="colFlex">
                <p id="basicsContentTitle">
                    {examineSkill?.skill}{examineRole?.skill}
                </p>
                {examineSkill &&
                    <p
                        id="basicsContentStat"
                        className={`skillStat${examineSkill.stat}`}>
                        <b>- {examineSkill.stat} -</b>
                    </p>}
                {examineRole &&
                    <p
                        id="basicsContentStat"
                        className={`skillStat${examineRole.job}`}>
                        <b>- {examineRole.job} -</b>
                    </p>}
                {!examineSkill && !examineRole &&
                    <p id="basicsContentStat">
                        <b>- Pick something -</b>
                    </p>}
                <p id="basicsContent">
                    {examineSkill?.description}{examineRole?.description}
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
                <button>
                    Only Stats
                </button>
                <button
                    className="basicSkillBtn"
                    onClick={() => {
                        if (roles.length > 0) {
                            setSkills(skillArr)
                            setRoles([])
                        } else {
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Skills
                </button>
                <button
                    className="basicRoleBtn"
                    onClick={() => {
                        if (skills.length > 0) {
                            setRoles(roleArr)
                            setSkills([])
                        } else {
                            setRoles(roleArr)
                            setSkills(skillArr)
                        }
                    }}>
                    Only Roles
                </button>
            </span>

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {skills.map(
                    (skill) => {
                        return (
                            <button
                                className="basicSkillBtn"
                                onClick={() => {
                                    if (examineSkill && examineSkill?.skill === examineSkill?.skill) {
                                        setExamineSkill(undefined)
                                    } else {
                                        setExamineSkill(skill)
                                        setExamineRole(undefined)
                                    }
                                }}
                                key={skill.skill + "Key"}>
                                {skill.skill}
                            </button>
                        )
                    })}
                {roles.map(
                    (role) => {
                        return (
                            <button
                                className="basicRoleBtn"
                                onClick={() => {
                                    if (examineRole && examineRole?.job === examineRole?.job) {
                                        setExamineRole(undefined)
                                    } else {
                                        setExamineRole(role)
                                        setExamineSkill(undefined)
                                    }
                                }}
                                key={role.job + "Key"}>
                                {role.job}
                            </button>
                        )
                    })}
            </div>
        </>
    )
}