import { Link } from "react-router-dom";
import { useEffect } from "react";
import useDatabase from "../utils/useDatabase";
import useMake from "../utils/useMake";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const {
        role,
        setRole,
        changeRole,
        formData,
        setFormData,
        handleFormChange,
        handleCheckboxChange,
        scrollFunction,
        handleSubmit
    } = useMake();
    const { roleArr, skillArr } = useDatabase();

    useEffect(() => { window.onscroll = function () { scrollFunction() } }, []);
    useEffect(() => {
        window.onscroll = function () { scrollFunction() }
        if (role) {
            setFormData(prevData => ({ ...prevData, skills: role.defSkill }))
            console.log(formData)
        }
    }, [role]);

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
                onSubmit={handleSubmit}>

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

                {/*IZBERI HANDLE*/}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Handle (Nickname)
                    </span>
                    <input
                        name="handle"
                        type={"text"}
                        className={"formInputField "}
                        placeholder={"Example: Silver"}
                        autoComplete={"off"}
                        onChange={handleFormChange}
                        // value={formData.handle}
                        value="Silver"
                        maxLength={25}
                        required>
                    </input>
                </label>

                {/* IZBERI AGE */}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Age
                    </span>
                    <input
                        name="age"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"Min-Max: 16-120"}
                        autoComplete={"off"}
                        min={16}
                        max={120}
                        // value={formData.age}
                        value="20"
                        onChange={handleFormChange}
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
                                    preChecked={formData.skills.includes(e.skill)}
                                    onChange={handleCheckboxChange}
                                    limit={{
                                        current: formData.skills.length,
                                        max: 9
                                    }}>
                                    <span>({e.stat})</span>
                                </Checkbox>
                            </div>
                        )
                    })}</> :
                    <></>}

                <button
                    id="upBtnRole"
                    className="upBtn"
                    type={"button"}
                    onClick={() => {
                        document.body.scrollTop = 350;
                        document.documentElement.scrollTop = 350;
                    }}>
                    Back Up
                </button>



            </form>
        </>
    )
}