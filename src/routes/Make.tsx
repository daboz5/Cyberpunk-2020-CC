import { Link } from "react-router-dom";
import { useState } from "react";
import { Role } from "../types";
import useCyberStore from "../useCyberStore";
import useDatabase from "../utils/useDatabase";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const {
        jobSkillsChecked,
        setJobSkillsChecked
    } = useCyberStore();
    const { roleArr, skillArr } = useDatabase();

    const [role, setRole] = useState<Role | undefined>(undefined);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const changeRole = (name: string) => {
        console.log(name)

        const filterRole = roleArr.filter(e => e.job === name)[0];
        if (filterRole) {
            setRole(filterRole ? filterRole : undefined);
        } else if (name === "Create a Role") {
            setRole({
                skill: "",
                job: "Create a Role",
                description: "",
                defSkill: [],
                oridinalOrFortressDescription: ""
            })
        }
    }

    return (
        <>
            {/*EXIT*/}
            <nav>
                <Link to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>

            {/*FORMA ZA IZDELAVO LIKA*/}
            <h3>
                Create Character<br />
                (basic)
            </h3>
            <form
                id="form"
                className={"colFlex"}
                onSubmit={(e) => submit(e)}>

                {/*IZBERI HANDLE*/}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Handle (Nickname)
                    </span>
                    <input
                        name="job-input"
                        type={"text"}
                        className={"formInputField "}
                        placeholder={"Example: Silver"}
                        autoComplete={"off"}
                        required>
                    </input>
                </label>

                {/* IZBERI AGE */}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Age
                    </span>
                    <input
                        name="job-input"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"Min-Max: 16-120"}
                        autoComplete={"off"}
                        min={16}
                        max={120}
                        required>
                    </input>
                </label>


                {/* IZBIRA VLOGE */}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Pick, Edit or Create a Role
                    </span>
                    <SelectRadio
                        describe="Pick a role"
                        selected={role ? role.job : ""}
                        setSelected={changeRole}
                        selection={roleArr.map(role => role.job).concat("Create a Role")}
                    />
                </label>
                {role ?
                    <>{skillArr.map(e => {
                        return (
                            <div key={e.skill + "SkillKey"}>
                                <Checkbox
                                    checkId={e.skill.replace(" ", "") + "Skill"}
                                    checkClass={"jobSkill"}
                                    afterText={e.skill}
                                    afterChildClass={`skillStat ${"skillStat" + e.stat}`}
                                    preChecked={role.defSkill.includes(e.skill)}
                                    limit={{
                                        current: jobSkillsChecked,
                                        setCurrent: setJobSkillsChecked,
                                        max: 9
                                    }}>
                                    <span>({e.stat})</span>
                                </Checkbox>
                            </div>
                        )
                    })}</> :
                    <></>}

                {/*GUMBI ZA FORM*/}
                <div
                    id="formBtnBox"
                    className={"colFlex"}>
                    <div>
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setRole(undefined)}>
                            Reset
                        </button>
                        <button
                            className={"formBtn colFlex"}
                            type={"submit"}>
                            Confirm
                        </button>
                    </div>
                </div>

            </form>
        </>
    )
}