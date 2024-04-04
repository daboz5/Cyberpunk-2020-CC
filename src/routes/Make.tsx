import { Link } from "react-router-dom";
import { useState } from "react";
import useCPStore from "../utils/useCPStore";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const skillArr = [
        "Athletics",
        "Awareness",
        "Brawling",
        "Handgun",
        "Martial Arts",
        "Melee",
        "Rifle",
        "Submachinegun",
        "Stealth",
        "Wepons Tech",
    ];

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const { jobSkillsChecked, setJobSkillsChecked } = useCPStore();
    const [selected, setSelected] = useState("");

    return (
        <>
            <nav>
                <Link
                    to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>

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
                        selection={[
                            "Cop",
                            "Corporate",
                            "Fixer",
                            "Media",
                            "MedTech",
                            "Netrunner",
                            "Nomad",
                            "Rocker",
                            "Solo",
                            "Techie",
                            "Create / Edit a Role"
                        ]}
                    />
                </label>

                {selected === "Create / Edit a Role" ?
                    <>
                        {skillArr.map(skill => {
                            return (<Checkbox
                                checkId={skill + "SkillId"}
                                checkClass="jobSkill"
                                afterText={skill}
                                preChecked={false}
                                limit={{
                                    current: jobSkillsChecked,
                                    setCurrent: setJobSkillsChecked,
                                    max: 3
                                }}
                                key={skill + "SkillKey"} />)
                        })}
                    </> :
                    <></>}

                <div
                    id="formBtnBox"
                    className={"colFlex"}>
                    <div>
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setSelected("")}>
                            Izprazni
                        </button>
                        <button
                            className={"formBtn colFlex"}
                            type={"submit"}>
                            Deli
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}