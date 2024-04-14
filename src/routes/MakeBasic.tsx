import { useEffect } from "react";
import useDatabase from "../utils/useDatabase";
import useMake from "../utils/useMake";
import useDice from "../utils/useDice";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import useCyberStore from "../useCyberStore";

export default function MakeBasic() {

    const { basicInfo } = useCyberStore();
    const { roleArr } = useDatabase();
    const { dSix, sumArr } = useDice();
    const {
        role,
        setRole,
        changeRole,
        formData,
        setFormData,
        handleBasicFormChange,
        handleCheckboxChange,
        skills,
        skillFilter,
        scrollFunction,
        scrollToBottom,
        handleBasicSubmit,
        numberInputOnWheelPreventChange
    } = useMake();

    useEffect(() => {
        window.onscroll = function () { scrollFunction() }
        if (basicInfo.role !== "") {
            setFormData(basicInfo)
            changeRole(basicInfo.role)
        }
    }, []);
    useEffect(() => {
        window.onscroll = function () { scrollFunction() }
        if (role) { setFormData(prevData => ({ ...prevData, skills: role.defSkill })) }
    }, [role]);

    return (
        <>
            {/*FORMA ZA IZDELAVO LIKA*/}
            <h3>
                Create Character<br />
                (basic)
            </h3>
            <form
                className={"form colFlex"}
                onSubmit={handleBasicSubmit}>

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
                        onChange={handleBasicFormChange}
                        value={formData.handle}
                        maxLength={20}
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
                        value={formData.age}
                        onChange={handleBasicFormChange}
                        onWheel={numberInputOnWheelPreventChange}
                        required>
                    </input>
                    <button
                        className={"formBtn colFlex"}
                        type={"button"}
                        onClick={() => {
                            setFormData(prevData => ({ ...prevData, age: (16 + sumArr(dSix(2))) }))
                        }}>
                        Roll for age ( 16 + 2d6 )
                    </button>
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

                {role?.job === "Create a Role" &&
                    <>
                        {/* IZDELAJ ROLE */}
                        <label className={"formInput colFlex"}>
                            <span className={"formInputTitle"}>
                                Role
                            </span>
                            <input
                                name="role"
                                type={"text"}
                                className={"formInputField "}
                                placeholder={"Example: Detective"}
                                autoComplete={"off"}
                                onChange={handleBasicFormChange}
                                value={formData.role}
                                maxLength={20}
                                required>
                            </input>
                        </label>
                        <label className={"formInput colFlex"}>
                            <span className={"formInputTitle"}>
                                Special Ability
                            </span>
                            <input
                                name="roleSkill"
                                type={"text"}
                                className={"formInputField "}
                                placeholder={"Example: Cluecomotive"}
                                autoComplete={"off"}
                                onChange={handleBasicFormChange}
                                value={formData.roleSkill}
                                maxLength={20}
                                required>
                            </input>
                        </label>
                        <label className={"formInput colFlex"}>
                            <span className={"formInputTitle"}>
                                Special Ability Description
                            </span>
                            <input
                                name="roleInfo"
                                type={"text"}
                                className={"formInputField "}
                                placeholder={"Example: Informative description ..."}
                                autoComplete={"off"}
                                onChange={handleBasicFormChange}
                                value={formData.roleInfo}
                                minLength={3}
                                maxLength={100}
                                required>
                            </input>
                        </label>
                    </>}

                {role &&
                    <>
                        <span
                            className={"formInputTitle actMouse hoverTextShine"}
                            onClick={() => scrollToBottom()}>
                            {role.job === "Create a Role" ? "Pick" : "Confirm"} 9 {role.job} Career skills
                        </span>
                        {/* FILTER SKILLS */}
                        <input
                            name="filter"
                            type={"text"}
                            className={"formInputField roleSkillFilter"}
                            placeholder={"Filter: Acting / art / EMP"}
                            autoComplete={"off"}
                            onChange={skillFilter}
                            value={formData.filter}
                            maxLength={20}>
                        </input>

                        {/* IZBERI SKILLE VLOGE */}
                        {skills.map(e => {
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
                        })}
                    </>}

                {/*FAST UP BTN*/}
                <button
                    id="upBtnRole"
                    className="upBtn"
                    type={"button"}
                    onClick={() => {
                        document.body.scrollTop = 500;
                        document.documentElement.scrollTop = 500;
                    }}>
                    Back Up
                </button>

                {/*GUMBI ZA FORM*/}
                <div
                    className={"formBtnBox colFlex"}>
                    <span className="formNav">
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setRole(undefined)}>
                            Reset
                        </button>
                        <button
                            className={"formBtn colFlex"}
                            type={"submit"}>
                            Next
                        </button>
                    </span>
                </div>

            </form>
        </>
    )
}