import { Link } from "react-router-dom";
import { useState } from "react";
import useCPStore from "../utils/useCPStore";
import useDatabase from "../utils/useDatabase";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const { jobSkillsChecked, setJobSkillsChecked } = useCPStore();
    const { rolesArr, skillArr } = useDatabase();

    const [selected, setSelected] = useState("");

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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

                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Pick, Edit or Create a Role
                    </span>
                    <SelectRadio
                        describe="Pick a role"
                        selected={selected}
                        setSelected={setSelected}
                        selection={rolesArr.map(role => role.job).concat("Edit / Create")}
                    />
                </label>

                {/*IZDELAVA NOVE VLOGE*/}
                {selected === "Edit / Create" ?
                    <>
                        {skillArr.map(e => {
                            return (
                                <div key={e.skill + "SkillKey"}>
                                    <Checkbox
                                        checkId={e.skill.replace(" ", "") + "Skill"}
                                        checkClass={"jobSkill"}
                                        afterText={e.skill}
                                        afterChildClass={`skillStat ${"skillStat" + e.stat}`}
                                        preChecked={false}
                                        limit={{
                                            current: jobSkillsChecked,
                                            setCurrent: setJobSkillsChecked,
                                            max: 9
                                        }}>
                                        <span>({e.stat})</span>
                                    </Checkbox>
                                </div>
                            )
                        })}
                    </> :
                    <></>}

                {/*GUMBI ZA FORM*/}
                <div
                    id="formBtnBox"
                    className={"colFlex"}>
                    <div>
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setSelected("")}>
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