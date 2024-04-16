import { useState } from "react";
import { Role, Skill, Stat } from "../types";
import useDatabase from "../utils/useDatabase"

export default function RulesBasics() {

    const { statArr, skillArr, roleArr } = useDatabase();

    const [stats, setStats] = useState(statArr);
    const [skills, setSkills] = useState(skillArr);
    const [roles, setRoles] = useState(roleArr);
    const [examineStat, setExamineStat] = useState<Stat | undefined>(undefined);
    const [examineSkill, setExamineSkill] = useState<Skill | undefined>(undefined);
    const [examineRole, setExamineRole] = useState<Role | undefined>(undefined);
    const [filterData, setFilterData] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterData(value);

        const filteredStats = statArr.filter(stat => {
            const stringedSkill = `${stat.stat} ${stat.short} ${stat.description} ${stat.oridinalOrFortressDescription} ${stat.stat.toLowerCase()}`
            if (stringedSkill.includes(value)) { return stat }
        });
        setStats(filteredStats);
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
                    {examineStat?.stat}{examineSkill?.skill}{examineRole?.skill}
                    {!examineStat && !examineSkill && !examineRole && "Pick something."}
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
                        className={`skillStat`}>
                        <b>- {examineRole.job} -</b>
                    </p>}
                {examineStat &&
                    <p
                        id="basicsContentStat"
                        className={`skillStat${examineStat.short}`}>
                        <b>- {examineStat.short} -</b>
                    </p>}
                <p id="basicsContent">
                    {examineStat?.description}{examineSkill?.description}{examineRole?.description}
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
                    onClick={() => {
                        if (skills.length > 0 || roles.length > 0) {
                            setStats(statArr)
                            setSkills([])
                            setRoles([])
                        } else {
                            setStats(statArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Stats
                </button>
                <button
                    className="basicSkillBtn"
                    onClick={() => {
                        if (roles.length > 0 || stats.length > 0) {
                            setStats([])
                            setSkills(skillArr)
                            setRoles([])
                        } else {
                            setStats(statArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Skills
                </button>
                <button
                    className="basicRoleBtn"
                    onClick={() => {
                        if (skills.length > 0 || stats.length > 0) {
                            setStats([])
                            setSkills([])
                            setRoles(roleArr)
                        } else {
                            setStats(statArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Roles
                </button>
            </span>

            {/* PICK CONTENT BUTTONS */}
            <div className="flex basicsBtnBox">
                {stats.map(
                    (stat) => {
                        return (
                            <button
                                className="basicStatBtn"
                                onClick={() => {
                                    if (examineStat && examineStat.stat === stat.stat) {
                                        setExamineStat(undefined)
                                    } else {
                                        setExamineStat(stat)
                                        setExamineSkill(undefined)
                                        setExamineRole(undefined)
                                    }
                                }}
                                key={stat.stat + "Key"}>
                                {stat.stat}
                            </button>
                        )
                    })}
                {skills.map(
                    (skill) => {
                        return (
                            <button
                                className="basicSkillBtn"
                                onClick={() => {
                                    if (examineSkill && examineSkill.skill === skill.skill) {
                                        setExamineSkill(undefined)
                                    } else {
                                        setExamineStat(undefined)
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
                                    if (examineRole && examineRole.job === role.job) {
                                        setExamineRole(undefined)
                                    } else {
                                        setExamineStat(undefined)
                                        setExamineSkill(undefined)
                                        setExamineRole(role)
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