import { useState } from "react";
import { Ability, Role, Skill, Stat } from "../types";
import useDatabase from "../utils/useDatabase"

export default function RulesBasics() {

    const { statArr, skillArr, roleArr, abilityArr } = useDatabase();

    const [stats, setStats] = useState(statArr);
    const [abilities, setAbilities] = useState(abilityArr);
    const [skills, setSkills] = useState(skillArr);
    const [roles, setRoles] = useState(roleArr);
    const [examineStat, setExamineStat] = useState<Stat | undefined>(undefined);
    const [examineAbility, setExamineAbility] = useState<Ability | undefined>(undefined);
    const [examineSkill, setExamineSkill] = useState<Skill | undefined>(undefined);
    const [examineRole, setExamineRole] = useState<Role | undefined>(undefined);
    const [filterData, setFilterData] = useState("");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterData(value);

        const filteredStats = statArr.filter(stat => {
            const stringedSkill = `${stat.stat} ${stat.short} ${stat.description} ${stat.oldDescription} ${stat.stat.toLowerCase()}`
            if (stringedSkill.includes(value)) { return stat }
        });
        setStats(filteredStats);
        const filteredAbilities = abilityArr.filter(ability => {
            const stringedSkill = `${ability.ability} ${ability.stat} ${ability.description} ${ability.oldDescription} ${ability.stat.toLowerCase()}`
            if (stringedSkill.includes(value)) { return ability }
        });
        setAbilities(filteredAbilities);
        const filteredSkills = skillArr.filter(skill => {
            const stringedSkill = `${skill.stat} ${skill.skill} ${skill.description} ${skill.oldDescription} ${skill.skill.toLowerCase()}`
            if (stringedSkill.includes(value)) { return skill }
        });
        setSkills(filteredSkills);
        const filteredRoles = roleArr.filter(role => {
            const stringedSkill = `${role.job} ${role.skill} ${role.description} ${role.oldDescription} ${role.job.toLowerCase()}`
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
                    {examineStat?.stat}{examineAbility?.ability}{examineSkill?.skill}{examineRole?.job}
                    {!examineStat && !examineAbility && !examineSkill && !examineRole && "Pick something."}
                </p>
                {examineSkill &&
                    <p
                        id="basicsContentSubtitle"
                        className={`skillStat${examineSkill.stat}`}>
                        <b>- {examineSkill.stat} -</b>
                    </p>}
                {examineAbility &&
                    <p
                        id="basicsContentSubtitle"
                        className={`skillStat${examineAbility.ability}`}>
                        <b>- {examineAbility.stat} -</b>
                    </p>}
                {examineRole &&
                    <p
                        id="basicsContentSubtitle"
                        className={`skillStat`}>
                        <b>- {examineRole.job} -</b>
                    </p>}
                {examineStat &&
                    <p
                        id="basicsContentSubtitle"
                        className={`skillStat${examineStat.short}`}>
                        <b>- {examineStat.short} -</b>
                    </p>}
                <p id="basicsContent">
                    {examineStat?.description}{examineAbility?.description}{examineSkill?.description}{examineRole?.description}
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
                        if (skills.length > 0 || abilities.length > 0 || roles.length > 0) {
                            setStats(statArr)
                            setAbilities([])
                            setSkills([])
                            setRoles([])
                        } else {
                            setStats(statArr)
                            setAbilities(abilityArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Stats
                </button>
                <button
                    className="basicAbilityBtn"
                    onClick={() => {
                        if (roles.length > 0 || skills.length > 0 || stats.length > 0) {
                            setStats([])
                            setAbilities(abilityArr)
                            setSkills([])
                            setRoles([])
                        } else {
                            setStats(statArr)
                            setAbilities(abilityArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Abilities
                </button>
                <button
                    className="basicSkillBtn"
                    onClick={() => {
                        if (roles.length > 0 || abilities.length > 0 || stats.length > 0) {
                            setStats([])
                            setAbilities([])
                            setSkills(skillArr)
                            setRoles([])
                        } else {
                            setStats(statArr)
                            setAbilities(abilityArr)
                            setSkills(skillArr)
                            setRoles(roleArr)
                        }
                    }}>
                    Only Skills
                </button>
                <button
                    className="basicRoleBtn"
                    onClick={() => {
                        if (skills.length > 0 || abilities.length > 0 || stats.length > 0) {
                            setStats([])
                            setAbilities([])
                            setSkills([])
                            setRoles(roleArr)
                        } else {
                            setStats(statArr)
                            setAbilities(abilityArr)
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
                                        setExamineAbility(undefined)
                                        setExamineSkill(undefined)
                                        setExamineRole(undefined)
                                    }
                                }}
                                key={stat.stat + "Key"}>
                                {stat.stat}
                            </button>
                        )
                    })}
                {abilities.map(
                    (ability) => {
                        return (
                            <button
                                className="basicAbilityBtn"
                                onClick={() => {
                                    if (examineAbility && examineAbility.ability === ability.ability) {
                                        setExamineAbility(undefined)
                                    } else {
                                        setExamineStat(undefined)
                                        setExamineAbility(ability)
                                        setExamineSkill(undefined)
                                        setExamineRole(undefined)
                                    }
                                }}
                                key={ability.ability + "Key"}>
                                {ability.ability}
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
                                        setExamineAbility(undefined)
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
                                        setExamineAbility(undefined)
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